import { ISingleLanguage, IMultipleLanguages, ITableData } from './data';

export function merger(src: IMultipleLanguages): ITableData {
  const langs = src.meta.syntax;
  const dest = {
    meta: {
      label: src.meta.label,
      syntax: langs,
    },
    data: [],
  };

  for (const [key, val] of Object.entries(src.data)) {
    dest.data.push({ label: key });
    for (const [row, codes] of Object.entries(val)) {
      dest.data.push({
        label: row,
        data: codes.map((code, i) => ({ lang: langs[i], code })),
      });
    }
  }

  return dest;
}

export function mergeDeepConcat(src: ISingleLanguage, dest: IMultipleLanguages|any = {}, index: number, size: number): IMultipleLanguages | any {
  if (['string', 'number'].includes(typeof (src))) {
    if (!Array.isArray(dest)) { dest = Array(size).fill(''); }
    dest[index] = src;
    return dest;
  }
  for (const [k, v] of Object.entries(src)) {
    dest[k] = mergeDeepConcat(v, dest[k], index, size);
  }
  return dest;
}

export function mergeConcatArray(arrayOfObjects: ISingleLanguage[], dest: IMultipleLanguages|any = {}): IMultipleLanguages {
  const size = arrayOfObjects.length;
  return arrayOfObjects.reduce((acc, src, i) => mergeDeepConcat(src, acc, i, size), dest);
}
