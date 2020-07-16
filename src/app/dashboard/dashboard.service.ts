import { Injectable } from '@angular/core';

import { ITableData } from './../data/data';
import { merger, mergeConcatArray } from './../data/utils';
import js from './../data/javascript';
import py from './../data/python';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getTableData(): ITableData {
    return merger(mergeConcatArray([js, py]));
  }
}
