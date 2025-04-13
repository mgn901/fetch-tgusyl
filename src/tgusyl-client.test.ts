import { describe, expect, test } from '@jest/globals';
import {
  tgusylReferenceDirectResultSample,
  tgusylReferenceDirectSampleHtml,
} from './test-data/tgusylReferenceDirectSample.ts';
import { toTgusylReferenceDirectResult } from './tgusyl-client.ts';

describe('tgusyl-client', () => {
  describe('toTgusylReferenceDirectResult', () => {
    test('can parse valid html string', () => {
      const date = new Date();
      date.setTime(1680307200);
      const subject = toTgusylReferenceDirectResult({
        id: 'example',
        domParser: new DOMParser(),
        updatedAt: date,
        html: tgusylReferenceDirectSampleHtml,
      });
      expect(subject).toEqual(tgusylReferenceDirectResultSample);
    });
  });
});
