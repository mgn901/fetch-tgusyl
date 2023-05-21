import {
  afterAll, describe, expect, test,
} from '@jest/globals';
import { MessageChannel } from 'worker_threads';
import clientify from './clientify';
import clientifyMap from './clientifyMap';
import serverify from './serverify';
import serverifyMap from './serverifyMap';

describe('asyncifyEvents', () => {
  const messageChannel = new MessageChannel();
  const clientMessagePort = messageChannel.port1;
  const serverMessagePort = messageChannel.port2;
  const replyListenerAdder: Parameters<typeof clientify>[0]['replyListenerAdder'] = (onReply) => {
    clientMessagePort.on('message', (message) => {
      onReply(message);
    });
  };
  const sendRequestFunction: Parameters<typeof clientify>[0]['sendRequestFunction'] = (message) => {
    clientMessagePort.postMessage(message);
  };
  const requestListenerAdder: Parameters<typeof serverify>[0]['requestListenerAdder'] = (onRequest) => {
    serverMessagePort.on('message', (message) => {
      onRequest(message);
    });
  };
  const sendReplyFunction: Parameters<typeof serverify>[0]['sendReplyFunction'] = (message) => {
    serverMessagePort.postMessage(message);
  };
  const processor = (a: number, b: number) => a + b;

  test('clientify().clientified', async () => {
    const channelFunctionMap0 = {
      test0: processor,
    };

    const { clientified } = clientify<typeof channelFunctionMap0, 'test0'>({
      channel: 'test0',
      replyListenerAdder,
      sendRequestFunction,
    });

    serverify<typeof channelFunctionMap0, 'test0'>({
      channel: 'test0',
      processor,
      requestListenerAdder,
      sendReplyFunction,
    });
    const result = await clientified(1, 2);
    expect(result).toBe(3);
  });

  test('clientifyMap', async () => {
    const channelFunctionMap1 = {
      test1: processor,
    };

    const { clientified } = clientifyMap<typeof channelFunctionMap1>({
      mapKeys: Object.keys(
        channelFunctionMap1,
      ) as Extract<keyof typeof channelFunctionMap1, string>[],
      replyListenerAdder,
      sendRequestFunction,
    }).test1;

    serverifyMap({
      map: channelFunctionMap1,
      requestListenerAdder,
      sendReplyFunction,
    });

    const result = await clientified(1, 2);
    expect(result).toBe(3);
  });

  afterAll(() => {
    messageChannel.port1.close();
    messageChannel.port2.close();
  });
});
