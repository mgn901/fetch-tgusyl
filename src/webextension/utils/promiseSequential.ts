/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const sleep = (ms: number, fluctuationRange: number) => new Promise((resolve) => {
  const fluctuation = (Math.random() - 0.5) * 2 * fluctuationRange;
  setTimeout(resolve, ms + fluctuation);
});

const promiseSequential = async <T>(
  wrappedPromises: (() => Promise<T>)[],
  abortSignal: AbortSignal | undefined = undefined,
  interval: number = 0,
  fluctuationRange: number = 0,
): Promise<(T | void)[]> => {
  const results: (T | void)[] = [];
  for (const current of wrappedPromises) {
    if (abortSignal?.aborted) {
      break;
    }
    const result = await current();
    results.push(result);
    await sleep(interval, fluctuationRange);
  }
  return results;
};

export default promiseSequential;
