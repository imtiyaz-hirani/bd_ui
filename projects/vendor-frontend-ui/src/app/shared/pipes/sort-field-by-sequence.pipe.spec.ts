import { SortFieldBySequencePipe } from './sort-field-by-sequence.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SortFieldBySequencePipe', () => {
  let pipe: SortFieldBySequencePipe;
  let sanitized: DomSanitizer;
  const mockArrAsc = [{ key: 1 }, { key: 2 }, { key: 3 }];
  const mockArrDsc = [{ key: 3 }, { key: 2 }, { key: 1 }];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer],
    });
    sanitized = TestBed.get(DomSanitizer);
    pipe = new SortFieldBySequencePipe();
  });
  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  test('it should not sort if the input is not an Array', () => {
    const testArr = null;
    const obj = pipe.transform(testArr, 'key', 'asc');
    expect(obj).toEqual(false);
  });
  test('it should sort an array based on the ascending order', () => {
    const testArr = [{ key: 2 }, { key: 3 }, { key: 1 }];
    const arr = pipe.transform(testArr, 'key', 'asc');
    expect(arr).toEqual(mockArrAsc);
  });
  test('it should sort an array based on the descending order', () => {
    const testArr = [{ key: 2 }, { key: 3 }, { key: 1 }];
    const arr = pipe.transform(testArr, 'key', 'desc');
    expect(arr).toEqual(mockArrDsc);
  });
});
