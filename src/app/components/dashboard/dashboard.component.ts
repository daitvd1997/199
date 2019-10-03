import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardserviceService } from 'src/app/services/dashboardservice.service';
import { DashboardModel } from 'src/app/models/dashboardModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { ResponseModelObject } from 'src/app/models/responseModelObject';
import { RequestGsmService } from 'src/app/services/request-gsm.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'CARD', 'AMOUNT', 'PHONE', 'TRANSID', 'REALMONEY', 'STATUS', 'TIME_CREATED', 'TIME_UPDATED','ACTIONS'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;


  pageOption = [5, 10, 25, 100];
  page = 0;
  pageSize = 25;
  length = 0;
  pageEvent: PageEvent;
  constructor(private requestGsmService: RequestGsmService, private alertService: AlertService, private router: Router) { }
  ngOnInit() {
    this.loadTable();
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  loadTable() {
    this.listData = null;
    this.requestGsmService.getAll(this.page, this.pageSize).subscribe(response => {
      console.log(response.data);
      this.listData = new MatTableDataSource(response.data);
      this.listData.sort = this.sort;
    });
    this.requestGsmService.getCount().subscribe(length => {
      this.length = +length;
    });
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  getServerData(event?: PageEvent) {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex;
    this.loadTable();
  }
}
