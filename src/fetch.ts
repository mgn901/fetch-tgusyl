import type { ExecutionQueue } from '@mgn901/mgn901-utils-ts/execution-queue';
import type { Id } from '@mgn901/mgn901-utils-ts/random-values';
import { Exception } from './exception.ts';

export type FetchFunction = (params: { readonly url: URL }) => Promise<string>;

export const fetchFunctionImpl: FetchFunction = async (params: {
  readonly url: URL;
}): Promise<string> => {
  const urlUsed = new URL(params.url);
  urlUsed.searchParams.sort();

  const response = await fetch(urlUsed, {
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'ja',
      'Accept-Encoding': 'gzip',
      Connection: 'keep-alive',
    },
  });

  if (response.ok === false) {
    throw Exception.create({
      exceptionName: 'fetch.failed',
      message: `Fetch failed; Status: ${response.status};  URL: ${urlUsed.toString()};`,
    });
  }

  return response.text();
};

export type FetchQueue = ExecutionQueue<Id, FetchFunction, void>;
