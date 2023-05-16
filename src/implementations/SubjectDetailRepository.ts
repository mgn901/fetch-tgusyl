import { ISubjectDetail } from '../types/ISubjectDetail';
import { convertReferenceDirectToSubjectDetail } from '../utils/convertReferenceDirectToSubjectDetail';

interface ISubjectDetailRepositoryOptions {
	domParser: DOMParser;
}

export class SubjectDetailRepository {
	private subjects: ISubjectDetail[];
	private readonly domParser: DOMParser;

	public constructor(options: ISubjectDetailRepositoryOptions) {
		this.subjects = [];
		this.domParser = options.domParser;
	}

	public async findByID(id: ISubjectDetail['id'], revalidate = false): Promise<ISubjectDetail | undefined> {
		const subjectInCache = this.subjects.find(subject => subject.id === id);
		if (revalidate && subjectInCache) {
			return subjectInCache;
		}

		// Fetch syllabus reference page.
		const referenceURL = new URL(`https://tgusyl.u-gakugei.ac.jp/ext_syllabus/referenceDirect.do?nologin=on&subjectID=${id}&formatCD=1`);
		const response = await fetch(referenceURL);
		if (!(response.ok)) {
			return undefined;
		}
		const updatedAt = new Date();
		const html = await response.text();

		const subject = convertReferenceDirectToSubjectDetail({
			id: id,
			referenceURL: referenceURL,
			updatedAt: updatedAt,
			html: html,
			domParser: this.domParser,
		});
		return subject;
	}

}
