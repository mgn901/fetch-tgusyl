import type { ISubjectCompact } from '../types/ISubjectCompact';
import convertHtmlToDocument from './convertHtmlToDocument';
import getDedupedArray from './getDedupedArray';
import getTrimmedText from './getTrimmedText';
import toAsciiString from './toAsciiString';

interface IConvertTabKamokuToSubjectCompactListParams {
  updatedAt: Date;
  html: string;
  domParser: DOMParser;
  subjectCompactList?: ISubjectCompact[];
}

const convertTabKamokuToSubjectCompactList = (
  params: IConvertTabKamokuToSubjectCompactListParams,
): ISubjectCompact[] => {
  const { updatedAt, html, domParser } = params;
  const subjectCompactList = [...(params.subjectCompactList ?? [])];

  const document = convertHtmlToDocument(html, domParser);
  const tableRows = document.querySelectorAll<HTMLTableRowElement>(
    'table.tbl:nth-child(1) > tbody:nth-child(2) > tr',
  );

  tableRows.forEach((tableRow) => {
    const children = [...tableRow.children];
    const trimmedChildren = children.map((element) => toAsciiString(getTrimmedText(element) ?? ''));
    const altURL = `https://tgusyl.u-gakugei.ac.jp/ext_syllabus/referenceDirect.do?nologin=on&subjectID=${trimmedChildren[0]}${trimmedChildren[3]}&formatCD=1`;
    const idFromURL =
      new URL(tableRow.dataset.href ?? altURL).searchParams.get('subjectID') ??
      `${trimmedChildren[0]}${trimmedChildren[3]}`;
    const id = idFromURL.length !== 0 ? idFromURL : `${trimmedChildren[0]}${trimmedChildren[3]}`;
    const subject = subjectCompactList.find((subjectCompact) => subjectCompact.id === id);

    if (!subject) {
      subjectCompactList.push({
        id,
        code: trimmedChildren[0] ?? undefined,
        name: trimmedChildren[1] ?? '',
        grades: Number(trimmedChildren[2]) ? [Number(trimmedChildren[2])] : [],
        classes: trimmedChildren[3] ? [trimmedChildren[3]] : [],
        semesters: trimmedChildren[4] ? [trimmedChildren[4]] : [],
        weeks: trimmedChildren[5] ? [trimmedChildren[5]] : [],
        places: trimmedChildren[6] ? [trimmedChildren[6]] : [],
        teachers: trimmedChildren[7]?.split('、') ?? [],
        updatedAt: updatedAt.getTime(),
      });
      return;
    }

    if (trimmedChildren[2]) {
      subject.grades = getDedupedArray([...subject.grades, Number(trimmedChildren[2])]);
    }
    if (trimmedChildren[3]) {
      subject.classes = getDedupedArray([...subject.classes, trimmedChildren[3]]);
    }
    if (trimmedChildren[4]) {
      subject.semesters = getDedupedArray([...subject.semesters, trimmedChildren[4]]);
    }
    if (trimmedChildren[5]) {
      subject.weeks = getDedupedArray([...subject.weeks, trimmedChildren[5]]);
    }
    if (trimmedChildren[6]) {
      subject.places = getDedupedArray([...subject.places, trimmedChildren[6]]);
    }
    if (trimmedChildren[7]) {
      subject.teachers = getDedupedArray([
        ...subject.teachers,
        ...(trimmedChildren[7]?.split('、') ?? []),
      ]);
    }
  });

  return subjectCompactList;
};

export default convertTabKamokuToSubjectCompactList;
