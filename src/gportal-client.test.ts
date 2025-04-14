import { describe, expect, test } from '@jest/globals';
import { toGportalSearchResult } from './gportal-client.ts';
import {
  gportalSearchResultSample,
  gportalSearchSampleHtml,
} from './test-data/gportalSearchSample.ts';

describe('gportal-client', () => {
  describe('toGportalSearchResult', () => {
    test('can parse valid html string', () => {
      const result = toGportalSearchResult({
        domParser: new DOMParser(),
        html: gportalSearchSampleHtml,
      });
      expect(result).toEqual(gportalSearchResultSample);
    });
  });
});
