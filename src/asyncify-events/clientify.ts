import ClientTerminal from './ClientTerminal';
import { IReply } from './IReply';
import { IRequest } from './IRequest';
import { TChannelFunctionMap } from './TChannelFunctionMap';
import { TFunction } from './TFunction';
import { TWithHeader } from './TWithHeader';

interface IClientifyOptions<M extends TChannelFunctionMap, C extends Extract<keyof M, string>> {
  channel: C;
  replyListenerAdder: (onReply: (message: TWithHeader<IReply>) => void) => void;
  sendRequestFunction: (message: TWithHeader<IRequest>) => void;
}

interface IClientifyReturns<T extends TFunction> {
  clientified: (...params: Parameters<T>) => Promise<ReturnType<T>>;
  terminate: () => void;
}

const clientify = <M extends TChannelFunctionMap, C extends Extract<keyof M, string>>(
  options: IClientifyOptions<M, C>,
): IClientifyReturns<M[C]> => {
  const terminal = new ClientTerminal({
    channel: options.channel,
    messageListenerAdder: options.replyListenerAdder,
    sendMessageFunction: options.sendRequestFunction,
  });

  const clientified = async (...params: Parameters<M[C]>): Promise<ReturnType<M[C]>> => {
    const request: IRequest = { value: params };
    const reply = await terminal.sendMessage(request);
    return reply.value;
  };

  return { clientified, terminate: terminal.terminate };
};

export default clientify;
