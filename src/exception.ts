type ExceptionName =
  | 'fetch.failed'
  | 'gportalClient.parseFailed'
  | 'gportalClient.pageNumberExceeded'
  | 'tgusylClient.parseFailed';

export class Exception<TExceptionName extends ExceptionName> extends Error {
  static {
    Exception.prototype.name = 'Exception';
  }

  public readonly exceptionName: TExceptionName;

  public static create<TExceptionName extends ExceptionName>(params: {
    readonly message?: string;
    readonly exceptionName: TExceptionName;
  }): Exception<TExceptionName> {
    return new Exception(params);
  }

  private constructor(params: {
    readonly message?: string;
    readonly exceptionName: TExceptionName;
  }) {
    super(params.message);
    this.exceptionName = params.exceptionName;
  }
}

export const throwIfUndefined = <T>(value: T | undefined, error: Error): T => {
  if (value === undefined) {
    throw error;
  }
  return value;
};
