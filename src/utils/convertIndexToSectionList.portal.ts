import { ISection } from '../types/ISection';
import convertHtmlToDocument from './convertHtmlToDocument';

interface IConvertIndexToSectionParams {
  html: string;
  domParser: DOMParser;
}

const convertIndexToSectionList = (params: IConvertIndexToSectionParams): ISection[] => {
  const { html, domParser } = params;
  const document = convertHtmlToDocument(html, domParser);
  const anchors = document.querySelectorAll('a');
  const sectionList: ISection[] = [];

  anchors.forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!(href?.startsWith('tab_kamoku.php'))) {
      return;
    }
    sectionList.push({
      tabName: anchor.textContent || '',
      tabURL: new URL(href, 'https://portal.u-gakugei.ac.jp/syllabus/').href,
    });
  });

  return sectionList;
};

export default convertIndexToSectionList;
