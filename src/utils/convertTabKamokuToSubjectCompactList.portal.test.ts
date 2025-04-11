import { describe, expect, test } from '@jest/globals';
import {
  subjectCompactListSample,
  tabKamokuSampleHTML,
} from '../test-data/subjectCompactListSample';
import convertTabKamokuToSubjectCompactList from './convertTabKamokuToSubjectCompactList.portal';

describe('convertTabKamokuToSubjectCompactList.portal', () => {
  test('convertTabKamokuToSubjectCompactList', () => {
    const date = new Date();
    date.setTime(1680307200);
    const subjectCompactList = convertTabKamokuToSubjectCompactList({
      updatedAt: date,
      domParser: new DOMParser(),
      html: tabKamokuSampleHTML,
      subjectCompactList: [],
    });
    expect(subjectCompactList).toEqual(subjectCompactListSample);
  });
});
