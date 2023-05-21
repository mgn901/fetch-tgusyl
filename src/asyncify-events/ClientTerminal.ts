import { TWithHeader } from './TWithHeader';
import generateID from './generateID';

interface ITask<TRequest extends Record<any, any>, TReply extends Record<any, any>> {
  request: TWithHeader<TRequest>;
  resolve: (value: TReply | PromiseLike<TReply>) => void;
}

interface IClientTerminalOptions<
  TRequest extends Record<any, any>, TReply extends Record<any, any>,
> {
  channel: ClientTerminal<TRequest, TReply>['channel'];
  sendMessageFunction: ClientTerminal<TRequest, TReply>['sendMessageFunction'];
  messageListenerAdder: (onMessage: (message: TWithHeader<TReply>) => void) => void;
  messageListenerRemover?: ClientTerminal<TRequest, TReply>['messageListenerRemover'];
}

export default class ClientTerminal<
  TRequest extends Record<any, any>, TReply extends Record<any, any>,
> {
  private tasks: ITask<TRequest, TReply>[];

  private readonly channel: string;

  private readonly sendMessageFunction: (message: TWithHeader<TRequest>) => void;

  private readonly messageListenerRemover?: (
    onMessaege: (message: TWithHeader<TRequest>) => void
  ) => void;

  public constructor(options: IClientTerminalOptions<TRequest, TReply>) {
    this.channel = options.channel;
    this.tasks = [];
    this.sendMessageFunction = options.sendMessageFunction;
    this.messageListenerRemover = options.messageListenerRemover;
    options.messageListenerAdder(this.onMessage);
  }

  private onMessage = (reply: TWithHeader<TReply>): void => {
    if (typeof reply?.id !== 'number' || reply?.type !== 'asyncify-events' || reply?.channel !== this.channel) {
      return;
    }
    const predicate = (task: ITask<TRequest, TReply>) => task.request.id === reply.id;
    const task = this.tasks.find(predicate);
    const taskIdx = this.tasks.findIndex(predicate);
    task?.resolve(reply);
    if (taskIdx !== -1) {
      this.tasks.splice(taskIdx, 1);
    }
  };

  public sendMessage = (request: TRequest) => new Promise<TReply>((resolve) => {
    const requestWithHeader: TWithHeader<TRequest> = {
      ...request,
      id: generateID(),
      type: 'asyncify-events',
      channel: this.channel,
    };
    this.tasks.push({ request: requestWithHeader, resolve });
    this.sendMessageFunction(requestWithHeader);
  });

  public terminate = (): void => {
    this.tasks = [];
    if (this.messageListenerRemover) {
      this.messageListenerRemover(this.onMessage);
    }
  };
}
