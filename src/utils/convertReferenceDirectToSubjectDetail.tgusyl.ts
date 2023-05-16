import { ISubjectDetail } from '../types/ISubjectDetail';
import { convertHtmlToDocument } from './convertHtmlToDocument';
import { getTrimmedText } from './getTrimmedText';

interface IConvertReferenceDirectToSubjectDetailParams {
	id: ISubjectDetail['id'];
	referenceURL: URL;
	updatedAt: Date;
	html: string;
	domParser: DOMParser;
}

export const convertReferenceDirectToSubjectDetail = (params: IConvertReferenceDirectToSubjectDetailParams): ISubjectDetail | undefined => {
	const { id, referenceURL, updatedAt, html, domParser } = params;

	const document = convertHtmlToDocument(html, domParser);
	const cells = [...document.querySelectorAll<HTMLTableCellElement>('html body table tbody tr td table.txt12 tbody tr td')];
	const trimmedCells = cells.map(cell => getTrimmedText(cell));
	if (cells.length === 0) {
		return undefined;
	}

	const subject: ISubjectDetail = {
		id: id,
		code: trimmedCells[1] ?? '',
		name: trimmedCells[3] ?? '',
		teachers: trimmedCells[5]?.split(',') ?? [],
		grades: (trimmedCells[7]?.split(',') ?? []).map(str => Number(str.trim()[0])) ?? [],
		classes: trimmedCells[9]?.split(',') ?? [],
		places: trimmedCells[11]?.split(',') ?? [],
		semesters: trimmedCells[15]?.split(',') ?? [],
		weeks: trimmedCells[17]?.split(',') ?? [],
		units: Number(trimmedCells[23]),
		categories: trimmedCells[25]?.split('、') ?? [],
		updatedAt: updatedAt.getTime(),
		properties: [
			{ key: 'メモ', type: 'plain', value: trimmedCells[27] ?? '' },
			{ key: 'ナンバリング', type: 'plain', value: trimmedCells[29] ?? '' },
			{ key: 'テキスト', type: 'plain', value: [...cells[35].childNodes].filter(node => node instanceof Text).map(node => getTrimmedText(node) ?? '').join('\n') },
			{ key: '出典', type: 'plain', value: `[シラバス参照 - 東京学芸大学 授業ガイド ${referenceURL}]` },
		],
	};

	return subject;
}
