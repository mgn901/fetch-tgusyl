import { ISubjectCompact } from '../types/ISubjectCompact';
import convertHtmlToDocument from './convertHtmlToDocument';
import getTrimmedText from './getTrimmedText';
import toAsciiString from './toAsciiString';

interface IConvertSearchResultToSubjectCompactParams {
  updatedAt: Date;
  html: string;
  domParser: DOMParser;
  subjectCompactList: ISubjectCompact[] | undefined;
}

const convertSearchResultToSubjectCompactList = (
  params: IConvertSearchResultToSubjectCompactParams,
): ISubjectCompact[] => {
  const {
    updatedAt, html, domParser, subjectCompactList = [],
  } = params;

  const document = convertHtmlToDocument(html, domParser);
  const rows = document.querySelectorAll<HTMLDivElement>('div.result-list');

  const altEl = document.createElement('span');
  rows.forEach((row) => {
    const code = getTrimmedText(row.querySelector('.syllabus-search-kamoku-code') ?? altEl) ?? '';
    const name = getTrimmedText(row.querySelector('.syllabus-search-kamoku-name') ?? altEl) ?? '';
    const grades = getTrimmedText(row.querySelector('.syllabus-search-grade') ?? altEl)?.split(',').map((str) => Number(str)) ?? [];
    const classes = toAsciiString(getTrimmedText(row.querySelector('.syllabus-search-class') ?? altEl) ?? '')?.split(',') ?? [];
    const semesters = toAsciiString(getTrimmedText(row.querySelector('.syllabus-search-semester') ?? altEl) ?? '')?.split(',') ?? [];
    const weeks = toAsciiString(getTrimmedText(row.querySelector('.syllabus-search-day-of-week') ?? altEl) ?? '')?.split(',') ?? [];
    const places = toAsciiString(getTrimmedText(row.querySelector('.syllabus-search-room') ?? altEl) ?? '')?.split(',') ?? [];
    const teachers = toAsciiString(getTrimmedText(row.querySelector('.syllabus-search-teacher-name') ?? altEl) ?? '')?.split(',') ?? [];
    const urlInRow = row.querySelector<HTMLAnchorElement>('.syllabus-search-syllabus a')?.href;
    const altURL = `https://tgusyl.u-gakugei.ac.jp/ext_syllabus/referenceDirect.do?nologin=on&subjectID=${code}${classes[0]}&formatCD=1`;
    const idFromURL = new URL(urlInRow ?? altURL).searchParams.get('subjectID') ?? `${code}${classes[0]}`;
    const id = idFromURL.length !== 0 ? idFromURL : `${code}${classes[0]}`;
    const subject: ISubjectCompact = {
      id,
      code,
      name,
      grades,
      classes,
      semesters,
      weeks,
      places,
      teachers,
      updatedAt: updatedAt.getTime(),
    };
    subjectCompactList.push(subject);
  });

  return subjectCompactList;
};

export default convertSearchResultToSubjectCompactList;
