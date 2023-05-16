import { ISection } from '../types/ISection';
import { ISectionRepository, ISectionRepositoryOptions } from '../types/ISectionRepository';
import { convertHtmlToDocument } from '../utils/convertHtmlToDocument';

export class SectionRepository extends ISectionRepository {
	private readonly domParser: DOMParser;
	private readonly sectionList: ISection[];

	public constructor(options: ISectionRepositoryOptions) {
		super();
		this.domParser = options.domParser;
		const document = convertHtmlToDocument(options.indexHTML, this.domParser);
		const anchors = document.querySelectorAll('ui-tabs-anchor');
		const sectionList: ISection[] = [];

		anchors.forEach((anchor) => {
			if (!(anchor instanceof HTMLAnchorElement) || !(anchor.href.startsWith('tab_kamoku.php'))) {
				return;
			}
			sectionList.push({
				tabName: anchor.textContent || '',
				tabURL: `https://portal.u-gakugei.ac.jp/syllabus/${anchor.href}`,
			});
		});

		this.sectionList = sectionList;
	}

	public findAll(): ISection[] {
		const sectionList = [...this.sectionList];
		return sectionList;
	}
}
