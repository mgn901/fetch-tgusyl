import type { ISubjectDetail } from '../types/ISubjectDetail';
import {
  ISubjectDetailRepository,
  type ISubjectDetailRepositoryOptions,
} from '../types/ISubjectDetailRepository';
import convertReferenceDirectToSubjectDetail from '../utils/convertReferenceDirectToSubjectDetail.tgusyl';

export default class SubjectDetailRepository extends ISubjectDetailRepository {
  private subjects: ISubjectDetail[];

  private readonly domParser: DOMParser;

  public constructor(options: ISubjectDetailRepositoryOptions) {
    super();
    this.subjects = [];
    this.domParser = options.domParser;
  }

  public async findByID(
    id: ISubjectDetail['subjectId'],
    revalidate = false,
  ): Promise<ISubjectDetail | undefined> {
    const subjectInCache = this.subjects.find((subject) => subject.subjectId === id);
    if (revalidate && subjectInCache) {
      return subjectInCache;
    }

    // Fetch syllabus reference page.
    const referenceURL = new URL(
      `https://tgusyl.u-gakugei.ac.jp/ext_syllabus/referenceDirect.do?nologin=on&subjectID=${id}&formatCD=1`,
    );
    const response = await fetch(referenceURL);
    if (!response.ok) {
      return undefined;
    }
    const updatedAt = new Date();
    const html = await response.text();

    const subject = convertReferenceDirectToSubjectDetail({
      id,
      referenceURL,
      updatedAt,
      html,
      domParser: this.domParser,
    });
    return subject;
  }
}
