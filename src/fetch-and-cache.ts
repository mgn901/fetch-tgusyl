import type { ExecutionQueue } from '@mgn901/mgn901-utils-ts/execution-queue';
import type { PreApplied } from '@mgn901/mgn901-utils-ts/pre-apply';
import type { Id } from '@mgn901/mgn901-utils-ts/random-values';
import type { Cache } from './cache.ts';
import type { FetchFunction } from './fetch.ts';

export type FetchAndCacheDependencies = {
  readonly fetch: FetchFunction;
  readonly cache: Cache;
};

export const fetchAndCache = async (
  params: { readonly url: URL } & FetchAndCacheDependencies,
): Promise<string> => {
  const response = await params.fetch({ url: params.url });
  await params.cache.setByUrl({ url: params.url, response });
  return response;
};

export type FetchAndCache = (params: { readonly url: URL }) => Promise<void>;

export type FetchAndCacheQueue = ExecutionQueue<
  Id,
  PreApplied<typeof fetchAndCache, FetchAndCacheDependencies>,
  void
>;
