import { describe, expect, test } from '@jest/globals';
import { subjectDetailSample, tgusylReferenceDirectSampleHTML } from '../test-data/subjectDetailSample';
import convertReferenceDirectToSubjectDetail from './convertReferenceDirectToSubjectDetail.tgusyl';

describe('convertReferenceDirectToSubjectDetail.tgusyl', () => {
  test('convertReferenceDirectToSubjectDetail', () => {
    const date = new Date();
    date.setTime(1680307200);
    const subject = convertReferenceDirectToSubjectDetail({
      id: 'example',
      domParser: new DOMParser(),
      referenceURL: new URL('https://example.com/'),
      updatedAt: date,
      html: tgusylReferenceDirectSampleHTML,
    });
    expect(subject).toEqual(subjectDetailSample);
  });
});
