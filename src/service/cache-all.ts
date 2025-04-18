import type { PreApplied } from '@mgn901/mgn901-utils-ts/pre-apply';
import { promiseSequential } from '@mgn901/mgn901-utils-ts/promise-sequential';
import { range } from '@mgn901/mgn901-utils-ts/range';
import type { FetchAndCacheQueue } from '../fetch-and-cache.ts';
import type { GportalClientDependencies, search } from '../gportal-client.ts';
import type { TgusylClientDependencies, referenceDirect } from '../tgusyl-client.ts';

export const cacheAll = async (params: {
  readonly fetchAndCacheQueue: FetchAndCacheQueue;
  readonly gportalSearch: PreApplied<typeof search, GportalClientDependencies>;
  readonly tgusylReferenceDirect: PreApplied<typeof referenceDirect, TgusylClientDependencies>;
}) => {
  const firstPage = await params.gportalSearch({
    page: 0,
    freeWord: '',
    nendo: 0,
    semester: 'all',
    subSemester: 'all',
    yobiType: 'all',
    jigenCd: 'all',
  });
  const pageCount = Math.ceil(firstPage.count / firstPage.limit);

  await promiseSequential({
    wrappedPromises: range(0, pageCount).map((page) => async () => {
      const searchResult = await params.gportalSearch({
        page,
        freeWord: '',
        nendo: 0,
        semester: 'all',
        subSemester: 'all',
        yobiType: 'all',
        jigenCd: 'all',
      });
      for (const subject of searchResult.subjects) {
        if (subject.syllabusUrl !== undefined) {
          await params.fetchAndCacheQueue.enqueue([{ url: new URL(subject.syllabusUrl) }]);
        }
      }
    }),
    interval: 3000,
    abortSignal: undefined,
  });
};
