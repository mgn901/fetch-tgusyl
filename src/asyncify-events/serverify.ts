import { IReply } from './IReply';
import { IRequest } from './IRequest';
import ServerTerminal from './ServerTerminal';
import { TChannelFunctionMap } from './TChannelFunctionMap';
import { TWithHeader } from './TWithHeader';

interface IServerifyOptions<M extends TChannelFunctionMap, C extends Extract<keyof M, string>> {
  channel: C;
  processor: M[C];
  requestListenerAdder: (onRequest: (message: TWithHeader<IRequest>) => void) => void;
  sendReplyFunction: (message: TWithHeader<IReply>) => void;
}

interface IServerifyReturns {
  terminate: () => void;
}

const serverify = <M extends TChannelFunctionMap, C extends Extract<keyof M, string>>(
  options: IServerifyOptions<M, C>,
): IServerifyReturns => {
  const terminal = new ServerTerminal<IRequest, IReply>({
    channel: options.channel,
    processor: async (message) => ({ value: await options.processor(...message.value) }),
    messageListenerAdder: options.requestListenerAdder,
    sendMessageFunction: options.sendReplyFunction,
  });

  return { terminate: terminal.terminate };
};

export default serverify;
