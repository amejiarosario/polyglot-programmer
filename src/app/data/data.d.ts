export interface ISingleLanguage {
  meta: {
    label: string;
    syntax: string;
  };
  data: {
    [category: string]: {
      [rowName: string]: string;
    }
  };
}

export interface IMultipleLanguages {
  meta: {
    label: string[];
    syntax: string[];
  };
  data: {
    [category: string]: {
      [rowName: string]: string[];
    }
  };
}

export interface ITableRowCode {
  lang: string;
  code: string;
}

export interface ITableDataRow {
  label: string;
  data?: ITableRowCode[];
}

export interface ITableData {
  meta: {
    label: string[];
    syntax: string[];
  };
  data: ITableDataRow[];
}

// export interface IMultipleLanguagesTableFormat {
//   headers: string[];
//   data: ITableData[];
// }
