import type { PreApplied } from '@mgn901/mgn901-utils-ts/pre-apply';
import { Exception, throwIfUndefined } from './exception.ts';
import type { FetchFunction } from './fetch.ts';
import { isNonEmptyString } from './text-format-util.ts';
import { toAsciiString } from './text-format-util.ts';
import convertHtmlToDocument from './utils/convertHtmlToDocument.ts';

const yobiTypeMap = {
  all: '',
  monday: '1',
  tuesday: '2',
  wednesday: '3',
  thursday: '4',
  friday: '5',
  saturday: '6',
  outOfSchoolHours: 'Z',
} as const;

const jigenCodeMap = {
  all: '',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  outOfSchoolHours: 'Z',
} as const;

const semesterMap = {
  all: '',
  semester1: '1',
  semester2: '2',
  throughSchoolYear: '3',
  crashCourse: 'ZZ',
} as const;

const subsemesterMap = {
  all: '',
  term1: 'A',
  term2: 'B',
  term3: 'C',
  term4: 'D',
  semester1: '1',
  semester2: '2',
} as const;

export type GportalClientDependencies = {
  readonly fetch: FetchFunction;
  readonly toGportalSearchResult: PreApplied<
    typeof toGportalSearchResult,
    { readonly domParser: DOMParser }
  >;
};

export const search = async (
  params: {
    readonly page: number;
    readonly freeWord: string;
    readonly nendo: number;
    readonly yobiType: keyof typeof yobiTypeMap;
    readonly jigenCd: keyof typeof jigenCodeMap;
    readonly semester: keyof typeof semesterMap;
    readonly subSemester: keyof typeof subsemesterMap;
  } & GportalClientDependencies,
): Promise<GportalSearchResult> => {
  const url = new URL('https://gportal.u-gakugei.ac.jp/syllabus/search');
  url.searchParams.set('page', (params.page + 1).toString(10));
  url.searchParams.set('initialFlag', '1');
  url.searchParams.set('freeWord', params.freeWord);
  url.searchParams.set('nendo', params.nendo.toString(10));
  url.searchParams.set('yobiType', yobiTypeMap[params.yobiType]);
  url.searchParams.set('jigenCd', jigenCodeMap[params.jigenCd]);
  url.searchParams.set('curriculum', '');
  url.searchParams.set('semester', semesterMap[params.semester]);
  url.searchParams.set('subSemester', subsemesterMap[params.subSemester]);
  url.searchParams.set('levelCode1', '');
  url.searchParams.set('teacherLevelCode1', '');
  url.searchParams.set('searchFlag', '1');

  return params.toGportalSearchResult({ html: await params.fetch({ url }) });
};

export type GportalSearchResult = {
  readonly count: number;
  readonly offset: number;
  readonly limit: number;
  readonly subjects: {
    readonly subjectCode: string;
    readonly name: string;
    readonly grade: string;
    readonly class: string;
    readonly period: string;
    readonly classHours: string[];
    readonly places: string[];
    readonly teachers: string[];
    readonly remarks: string;
    readonly syllabusUrl: string | undefined;
  }[];
};

export const toGportalSearchResult = (params: {
  readonly html: string;
  readonly domParser: DOMParser;
}): GportalSearchResult => {
  const document = convertHtmlToDocument(params.html, params.domParser);
  const contentsList = throwIfUndefined(
    document.querySelector<HTMLDivElement>(
      '#syllabusSearchResult>.contents-list>.contents-detail>div:nth-child(2)',
    ) ?? undefined,
    Exception.create({ exceptionName: 'gportalClient.parseFailed' }),
  );
  const rows = Array.from(contentsList.children ?? []);

  const parsedPagingText = throwIfUndefined(
    throwIfUndefined(
      document.querySelector('.paging-txt')?.textContent ?? undefined,
      Exception.create({ exceptionName: 'gportalClient.pageNumberExceeded' }),
    )
      .replace(/,/g, '')
      .match(/\d+/g) ?? undefined,
    Exception.create({ exceptionName: 'gportalClient.parseFailed' }),
  );
  const count = Number.parseInt(parsedPagingText[0]);
  const offset = Number.parseInt(parsedPagingText[1]) - 1;
  const limit = Number.parseInt(parsedPagingText[2]) - offset;

  return {
    count,
    offset,
    limit,
    subjects: rows?.map((row) => ({
      subjectCode: formatText(row.querySelector('.syllabus-search-kamoku-code')?.textContent ?? ''),
      name: formatText(row.querySelector('.syllabus-search-kamoku-name')?.textContent ?? ''),
      grade: formatText(row.querySelector('.syllabus-search-grade')?.textContent ?? ''),
      class: formatText(row.querySelector('.syllabus-search-class')?.textContent ?? ''),
      period: formatText(row.querySelector('.syllabus-search-period')?.textContent ?? ''),
      classHours:
        row
          .querySelector('.syllabus-search-day-of-week')
          ?.textContent?.split(',')
          .map(formatText)
          .filter(isNonEmptyString) ?? [],
      places:
        row
          .querySelector('.syllabus-search-room')
          ?.textContent?.split(',')
          .map(formatText)
          .filter(isNonEmptyString) ?? [],
      teachers:
        row
          .querySelector('.syllabus-search-teacher-name')
          ?.textContent?.split(',')
          .map(formatText)
          .filter(isNonEmptyString) ?? [],
      remarks: formatText(row.querySelector('.syllabus-search-remarks')?.textContent ?? ''),
      syllabusUrl: row
        .querySelector('.syllabus-search-syllabus')
        ?.querySelector<HTMLAnchorElement>('a')?.href,
    })),
  };
};

const formatText = (text: string) => toAsciiString(text.trim());
