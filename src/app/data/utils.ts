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

export function mergeDeepConcat(src: ISingleLanguage, dest: IMultipleLanguages|any = {}): IMultipleLanguages | any {
  if (['string', 'number'].includes(typeof (src))) {
    return Array.isArray(dest) ? dest.concat(src) : [src];
  }
  for (const [k, v] of Object.entries(src)) {
    dest[k] = mergeDeepConcat(v, dest[k]);
  }
  return dest;
}

export function mergeConcatArray(arrayOfObjects: ISingleLanguage[], dest: IMultipleLanguages|any = {}): IMultipleLanguages {
  return arrayOfObjects.reduce((acc, src) => mergeDeepConcat(src, acc), dest);
}
