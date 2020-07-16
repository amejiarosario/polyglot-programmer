import { merger, mergeConcatArray, mergeDeepConcat } from './utils';
import { ISingleLanguage, IMultipleLanguages, ITableDataRow } from './data';

describe('merger', () => {
  let headers: string[];
  let data: ITableDataRow[];
  let mergedJsPy: IMultipleLanguages;
  let js: ISingleLanguage;
  let py: ISingleLanguage;

  beforeEach(() => {
    headers = ['JavaScript', 'Python'];
    data = [
      {
        label: 'basics',
      },
      {
        label: 'showVersion',
        data: [
          { lang: 'js', code: 'node --version' },
          { lang: 'py', code: 'python --version' },
        ],
      },
      {
        label: 'helloWorld',
        data: [
          { lang: 'js', code: 'console.log("Hello World");' },
          { lang: 'py', code: 'print("Hello World!");' },
        ],
      },
      {
        label: 'conditionals',
      },
      {
        label: 'if',
        data: [
          { lang: 'js', code: 'if (x) doSomthing();' },
          {
            lang: 'py', code: `if (true):
  doSomething()`,
          },
        ],
      },
    ];

    mergedJsPy = {
      meta: {
        label: ['JavaScript', 'Python'],
        syntax: ['js', 'py'],
      },
      data: {
        basics: {
          showVersion: ['node --version', 'python --version'],
          helloWorld: ['console.log("Hello World");', 'print("Hello World!");'],
        },
        conditionals: {
          if: ['if (x) doSomthing();', `if (true):
  doSomething()`],
        },
      },
    };

    js = {
      meta: {
        label: 'JavaScript',
        syntax: 'js',
      },
      data: {
        basics: {
          showVersion: 'node --version',
          helloWorld: 'console.log("Hello World");',
        },
        conditionals: {
          if: 'if (x) doSomthing();',
        },
      },
    };

    py = {
      meta: {
        label: 'Python',
        syntax: 'py',
      },
      data: {
        basics: {
          showVersion: 'python --version',
          helloWorld: 'print("Hello World!");',
        },
        conditionals: {
          if: `if (true):
  doSomething()`,
        },
      },
    };
  });

  it('should work', () => {
    const actual = merger(mergedJsPy);
    expect(actual.meta.label).toEqual(headers);
    expect(actual.data).toEqual(data);
  });

  // it('should merge objects', () => {
  //   expect(mergeConcatArray([{ a: 'x' }, { a: 'y' }])).toEqual({ a: ['x', 'y'] });
  // });

  // it('should merge objects', () => {
  //   expect(mergeConcatArray([js.meta, py.meta])).toEqual(mergedJsPy.meta);
  // });

  // it('should merge objects', () => {
  //   expect(mergeConcatArray([js.data, py.data])).toEqual(mergedJsPy.data);
  // });

  it('should merge objects', () => {
    expect(mergeConcatArray([js, py])).toEqual(mergedJsPy);
  });

  describe('mergeDeepConcat', () => {
    it('should add arrays', (): void => {
      expect(mergeDeepConcat(js)).toEqual({
        meta: {
          label: ['JavaScript'],
          syntax: ['js'],
        },
        data: {
          basics: {
            showVersion: ['node --version'],
            helloWorld: ['console.log("Hello World");'],
          },
          conditionals: {
            if: ['if (x) doSomthing();'],
          },
        },
      });
    });
  });
});

// describe('mergeDeepConcat', () => {
//   it('should add arrays', (): void => {
//     expect(mergeDeepConcat(js)).toEqual({})
//   });
//   // it('should work', () => {
//   //   expect(mergeDeepConcat({ a: 1 })).toEqual({ a: [1] });
//   // });

//   // it('should work', () => {
//   //   expect(mergeDeepConcat({ a: 2 }, { a: [1] })).toEqual({ a: [1, 2] });
//   // });

//   // it('should work', () => {
//   //   expect(mergeDeepConcat({ a: { b: 1 } })).toEqual({ a: { b: [1] } });
//   // });

//   // it('should work', () => {
//   //   expect(mergeDeepConcat({ a: { b: 2 } }, { a: { b: [1] } })).toEqual({ a: { b: [1, 2] } });
//   // });
// });
