import { TWithHeader } from './TWithHeader';

interface IServerTerminalOptions<
  TRequest extends Record<any, any>, TReply extends Record<any, any>,
> {
  channel: ServerTerminal<TRequest, TReply>['channel'];
  processor: ServerTerminal<TRequest, TReply>['processor'];
  sendMessageFunction: ServerTerminal<TRequest, TReply>['sendMessageFunction'];
  messageListenerAdder: (onMessage: (message: TWithHeader<TRequest>) => void) => void;
  messageListenerRemover?: ServerTerminal<TRequest, TReply>['messageListenerRemover'];
}

export default class ServerTerminal<
  IRequest extends Record<any, any>, TReply extends Record<any, any>,
> {
  private readonly channel: string;

  private readonly processor: (message: TWithHeader<IRequest>) => Promise<TReply>;

  private readonly sendMessageFunction: (message: TWithHeader<TReply>) => void;

  private readonly messageListenerRemover?: (
    onMessaege: (message: TWithHeader<IRequest>) => void,
  ) => void;

  public constructor(options: IServerTerminalOptions<IRequest, TReply>) {
    this.channel = options.channel;
    this.processor = options.processor;
    this.sendMessageFunction = options.sendMessageFunction;
    this.messageListenerRemover = options.messageListenerRemover;
    options.messageListenerAdder(this.onMessage);
  }

  private onMessage = async (request: TWithHeader<IRequest>): Promise<void> => {
    if (typeof request?.id !== 'number' || request?.type !== 'asyncify-events' || request?.channel !== this.channel) {
      return;
    }
    this.sendMessageFunction({
      ...(await this.processor(request)),
      id: request.id,
      type: 'asyncify-events',
      channel: this.channel,
    });
  };

  public terminate = (): void => {
    if (this.messageListenerRemover) {
      this.messageListenerRemover(this.onMessage);
    }
  };
}
