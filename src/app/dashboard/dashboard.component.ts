import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ITableData } from '../data/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableData: ITableData;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.tableData = this.service.getTableData();
  }

}
