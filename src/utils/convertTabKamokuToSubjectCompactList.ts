import { ISubjectCompact } from '../types/ISubjectCompact';
import { convertHtmlToDocument } from './convertHtmlToDocument';
import { getDedupedArray } from './getDedupedArray';
import { getTrimmedText } from './getTrimmedText';

interface IConvertTabKamokuToSubjectCompactListParams {
	updatedAt: Date;
	html: string;
	domParser: DOMParser;
	subjectCompactList: ISubjectCompact[] | undefined;
}

export const convertTabKamokuToSubjectCompactList = (params: IConvertTabKamokuToSubjectCompactListParams): ISubjectCompact[] => {
	const { updatedAt, html, domParser } = params;
	const subjectCompactList = [...(params.subjectCompactList ?? [])];

	const document = convertHtmlToDocument(html, domParser);
	const tableRows = document.querySelectorAll<HTMLTableRowElement>('html body div.tblScroll table.tbl.tblBody tbody tr');

	tableRows.forEach((tableRow) => {
		const children = [...tableRow.children];
		const trimmedChildren = children.map(element => getTrimmedText(element));
		const id = tableRow.dataset.href ?? `${trimmedChildren[0]}-${trimmedChildren[3]}`;
		const subjectCompact = subjectCompactList.find(subject => subject.id === id);

		if (!subjectCompact) {
			subjectCompactList.push({
				id: id,
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

		if (trimmedChildren[2]) subjectCompact.grades = getDedupedArray([...subjectCompact.grades, Number(trimmedChildren[2])]);
		if (trimmedChildren[3]) subjectCompact.classes = getDedupedArray([...subjectCompact.classes, trimmedChildren[3]]);
		if (trimmedChildren[4]) subjectCompact.semesters = getDedupedArray([...subjectCompact.semesters, trimmedChildren[4]]);
		if (trimmedChildren[5]) subjectCompact.weeks = getDedupedArray([...subjectCompact.weeks, trimmedChildren[5]]);
		if (trimmedChildren[6]) subjectCompact.places = getDedupedArray([...subjectCompact.places, trimmedChildren[6]]);
		if (trimmedChildren[7]) subjectCompact.teachers = getDedupedArray([...subjectCompact.teachers, ...(trimmedChildren[7]?.split('、') ?? [])]);
	});

	return subjectCompactList;
}
