import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { isNativeError } from 'node:util/types';

export type Cache = {
  readonly getByUrl: (params: { readonly url: URL }) => Promise<string | undefined>;
  readonly setByUrl: (params: { readonly url: URL; readonly response: string }) => Promise<void>;
};

export interface CacheByNodeFsDependencies {
  readonly directory: string;
}

export const CacheByNodeFs = {
  getByUrl: async (
    params: { readonly url: URL } & CacheByNodeFsDependencies,
  ): Promise<string | undefined> => {
    const fileName = await getSha256HashHexString(params.url.toString());
    try {
      const file = await readFile(path.join(params.directory, `${fileName}.txt`), 'utf-8');
      return file;
    } catch (error: unknown) {
      if (isNativeError(error) && 'code' in error && error.code === 'ENOENT') {
        return undefined;
      }
      throw error;
    }
  },

  setByUrl: async (
    params: { readonly url: URL; readonly response: string } & CacheByNodeFsDependencies,
  ): Promise<void> => {
    const fileName = await getSha256HashHexString(params.url.toString());
    await writeFile(path.join(params.directory, `${fileName}.txt`), params.response);
  },
};

const getSha256HashHexString = async (input: string): Promise<string> => {
  const encoder = new TextEncoder();
  const digestArrayBuffer = await globalThis.crypto.subtle.digest('SHA-256', encoder.encode(input));
  const digestString = [...new Uint8Array(digestArrayBuffer)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
  return digestString;
};
