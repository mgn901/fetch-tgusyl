import { TChannelFunctionMap } from './TChannelFunctionMap';
import serverify from './serverify';

interface IServerifyMapOptions<M extends TChannelFunctionMap> {
  map: M;
  requestListenerAdder: Parameters<typeof serverify>[0]['requestListenerAdder'];
  sendReplyFunction: Parameters<typeof serverify>[0]['sendReplyFunction'];
}

type TServerifiedMap<M extends TChannelFunctionMap> = {
  [k in Extract<keyof M, string>]: ReturnType<typeof serverify<M, k>>;
};

const serverifyMap = <M extends TChannelFunctionMap>(
  options: IServerifyMapOptions<M>,
): TServerifiedMap<M> => {
  const { map, requestListenerAdder, sendReplyFunction } = options;

  const serverifiedEntries = Object.entries(map).map(([key, func]) => [
    key,
    serverify({
      channel: key,
      processor: func,
      requestListenerAdder,
      sendReplyFunction,
    }),
  ]);

  return Object.fromEntries(serverifiedEntries);
};

export default serverifyMap;
