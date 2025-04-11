import type { PreApplied } from '@mgn901/mgn901-utils-ts/pre-apply';
import { Exception } from './exception.ts';
import type { FetchFunction } from './fetch.ts';
import convertHtmlToDocument from './utils/convertHtmlToDocument.ts';
import getTrimmedText from './utils/getTrimmedText.ts';
import toAsciiString from './utils/toAsciiString.ts';

export const referenceDirect = async (params: {
  readonly subjectId: string;
  readonly updatedAt: Date;
  readonly fetch: FetchFunction;
  readonly toSubjectDetail: PreApplied<
    typeof toTgusylReferenceDirectResult,
    { readonly domParser: DOMParser }
  >;
}): Promise<TgusylReferenceDirectResult> => {
  const url = new URL('https://tgusyl.u-gakugei.ac.jp/ext_syllabus/referenceDirect.do');
  url.searchParams.set('nologin', 'on');
  url.searchParams.set('subjectID', params.subjectId);
  url.searchParams.set('formatCD', '1');

  return params.toSubjectDetail({
    html: await params.fetch({ url }),
    id: params.subjectId,
    updatedAt: params.updatedAt,
  });
};

export type TgusylReferenceDirectResult = {
  readonly id: string;
  readonly subjectCode: string;
  readonly name: string;
  readonly teachers: string[];
  readonly grade: string;
  readonly class: string;
  readonly places: string[];
  readonly period: string;
  readonly classHours: string[];
  readonly units: number;
  readonly courses: string[];
  readonly classification: string;
  readonly textbooks: string;
  readonly references: string;
  readonly evaluationMethod: string;
  readonly updatedAt: number;
};

export const toTgusylReferenceDirectResult = (params: {
  readonly html: string;
  readonly id: TgusylReferenceDirectResult['id'];
  readonly updatedAt: Date;
  readonly domParser: DOMParser;
}): TgusylReferenceDirectResult => {
  const document = convertHtmlToDocument(params.html, params.domParser);
  const cells = Array.from(
    document.querySelectorAll<HTMLTableCellElement>(
      'html body table tbody tr td table.txt12 tbody tr td',
    ),
  );
  const trimmedCells = cells.map((cell) => toAsciiString(getTrimmedText(cell) ?? ''));
  if (cells.length < 40) {
    throw Exception.create({ exceptionName: 'tgusylClient.parseFailed' });
  }

  return {
    id: params.id,
    subjectCode: trimmedCells[1],
    name: trimmedCells[3],
    teachers: trimmedCells[5].split(','),
    grade: trimmedCells[7],
    class: trimmedCells[9],
    places: trimmedCells[11].split(','),
    period: trimmedCells[15],
    classHours: trimmedCells[17]?.split(','),
    units: Number(trimmedCells[23]),
    courses: trimmedCells[25]?.split('、'),
    classification: trimmedCells[29],
    textbooks: Array.from(cells[35].childNodes)
      .filter((node) => node instanceof Text)
      .map((node) => getTrimmedText(node) ?? '')
      .join('\n'),
    references: Array.from(cells[37].childNodes)
      .filter((node) => node instanceof Text)
      .map((node) => getTrimmedText(node) ?? '')
      .join('\n'),
    evaluationMethod: Array.from(cells[39].childNodes)
      .filter((node) => node instanceof Text)
      .map((node) => getTrimmedText(node) ?? '')
      .join('\n'),
    updatedAt: params.updatedAt.getTime(),
  };
};
