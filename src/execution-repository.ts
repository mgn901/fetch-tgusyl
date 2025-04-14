import {
  type Execution,
  ExecutionReducers,
  type ExecutionRepository,
} from '@mgn901/mgn901-utils-ts/execution-queue';
import type { Id } from '@mgn901/mgn901-utils-ts/random-values';
import {
  type Filters,
  type FromRepository,
  type OrderBy,
  repositorySymbol,
} from '@mgn901/mgn901-utils-ts/repository-utils';
import { type SQL, and, asc, desc, eq, gte, lte } from 'drizzle-orm';
import type { database } from './database.ts';
import { executionsTable } from './schema.drizzle.ts';

export class ExecutionRepositoryByLibsql<
  TId extends Id,
  TFunc extends (this: unknown, ...args: never[]) => TReturned,
  TReturned,
> implements ExecutionRepository<TId, TFunc, TReturned>
{
  private readonly database: typeof database;

  public constructor(params: { readonly database: typeof database }) {
    this.database = params.database;
  }

  public async getOneById(
    this: ExecutionRepositoryByLibsql<TId, TFunc, TReturned>,
    id: TId,
  ): Promise<FromRepository<Execution<TId, TFunc, TReturned>> | undefined> {
    const [item] = await this.database
      .select()
      .from(executionsTable)
      .where(eq(executionsTable.id, id));
    if (item === undefined) {
      return undefined;
    }
    const execution = this.toExecution(item);
    return { [repositorySymbol.latestVersion]: execution, ...execution };
  }

  public async getMany(
    this: ExecutionRepositoryByLibsql<TId, TFunc, TReturned>,
    params: {
      readonly filters?: Filters<
        Pick<Execution<TId, TFunc, TReturned>, 'executedAt' | 'isExecuted'>
      >;
      readonly orderBy: OrderBy<
        Pick<Execution<TId, TFunc, TReturned>, 'executedAt' | 'isExecuted'>
      >;
      readonly offset?: number | undefined;
      readonly limit?: number | undefined;
    },
  ): Promise<readonly [] | readonly FromRepository<Execution<TId, TFunc, TReturned>>[]> {
    const items = await this.database
      .select()
      .from(executionsTable)
      .where(this.sqlFromFilters(params.filters))
      .orderBy(this.sqlFromOrderBy(params.orderBy))
      .offset(params.offset ?? 0)
      .limit(params.limit ?? 100);

    return items
      .map((item) => this.toExecution(item))
      .map((execution) => ({
        [repositorySymbol.latestVersion]: execution,
        ...execution,
      }));
  }

  public async count(
    this: ExecutionRepositoryByLibsql<TId, TFunc, TReturned>,
    params: {
      readonly filters?: Filters<
        Pick<Execution<TId, TFunc, TReturned>, 'executedAt' | 'isExecuted'>
      >;
    },
  ): Promise<number> {
    return this.database.$count(executionsTable, this.sqlFromFilters(params.filters));
  }

  public async createOne(
    this: ExecutionRepositoryByLibsql<TId, TFunc, TReturned>,
    execution: Execution<TId, TFunc, TReturned>,
  ): Promise<void> {
    await this.database.insert(executionsTable).values(this.insertValueFromExecution(execution));
  }

  public async updateOne(
    this: ExecutionRepositoryByLibsql<TId, TFunc, TReturned>,
    execution: FromRepository<Execution<TId, TFunc, TReturned>>,
  ): Promise<void> {
    await this.database
      .update(executionsTable)
      .set(this.insertValueFromExecution(execution))
      .where(eq(executionsTable.id, execution.id));
  }

  public async deleteOneById(
    this: ExecutionRepositoryByLibsql<TId, TFunc, TReturned>,
    id: TId,
  ): Promise<void> {
    await this.database.delete(executionsTable).where(eq(executionsTable.id, id));
  }

  private toExecution(item: {
    readonly id: string;
    readonly args: string;
    readonly executedAt: number;
    readonly isExecuted: number;
  }): Execution<TId, TFunc, TReturned> {
    return ExecutionReducers.fromParams({
      id: item.id as TId,
      args: JSON.parse(item.args) as Readonly<Parameters<TFunc>>,
      executedAt: new Date(item.executedAt),
      isExecuted: item.isExecuted === 1,
    });
  }

  private insertValueFromExecution(execution: Execution<TId, TFunc, TReturned>) {
    return {
      id: execution.id,
      args: JSON.stringify(execution.args),
      executedAt: execution.executedAt.getTime(),
      isExecuted: execution.isExecuted ? 1 : 0,
    };
  }

  private sqlFromFilters(
    filters?: Filters<Pick<Execution<TId, TFunc, TReturned>, 'executedAt' | 'isExecuted'>>,
  ): SQL | undefined {
    return and(
      ...[
        ...(filters?.executedAt instanceof Date
          ? [eq(executionsTable.executedAt, filters.executedAt.getTime())]
          : []),
        ...(filters?.executedAt !== undefined && 'from' in filters.executedAt
          ? [gte(executionsTable.executedAt, filters.executedAt.from.getTime())]
          : []),
        ...(filters?.executedAt !== undefined && 'until' in filters.executedAt
          ? [lte(executionsTable.executedAt, filters.executedAt.until.getTime())]
          : []),
        ...(filters?.isExecuted
          ? [eq(executionsTable.isExecuted, filters.isExecuted ? 1 : 0)]
          : []),
      ],
    );
  }

  private sqlFromOrderBy(
    orderBy: OrderBy<Pick<Execution<TId, TFunc, TReturned>, 'executedAt'>>,
  ): SQL {
    return orderBy.executedAt === 'asc'
      ? asc(executionsTable.executedAt)
      : desc(executionsTable.executedAt);
  }
}
