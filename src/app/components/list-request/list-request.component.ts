import { PartnerService } from './../../services/partner.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { RequestGsmService } from 'src/app/services/request-gsm.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PartnerModelOption } from 'src/app/models/partnerModelOption';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'CARD', 'SERI', 'TYPE', 'AMOUNT', 'PHONE', 'TRANSID', 'REALMONEY', 'STATUS', 'TIME_CREATED', 'TIME_UPDATED', 'ACTIONS'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  chogach = 0;
  listPartnerModelOption : PartnerModelOption[];
  selectedValue:-1;
  pageOption = [5, 10, 25, 100];
  page = 0;
  pageSize = 100;
  length = 0;
  pageEvent: PageEvent;
  currentUser :any;
  constructor(private requestGsmService: RequestGsmService, private alertService: AlertService, private router: Router,private authenticationService: AuthenticationService,
     private partnerService :PartnerService) { }
  ngOnInit() {
    this.loadTable();
    this.currentUser = this.authenticationService.currentUserValue;
    this.partnerService.getPartnerOption().subscribe(response => {
      this.listPartnerModelOption = response.data;
    });   
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  loadTable() {
    this.listData = null;
    this.requestGsmService.getAll(this.page, this.pageSize).subscribe(response => {
      console.log(response);
      if (response) {
        this.listData = new MatTableDataSource(response.data);
        this.listData.sort = this.sort;
      }
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
  reCall(id:number) {
    this.requestGsmService.recall(id).subscribe(response => {
      this.alertService.info('Đã call lại: '+response.message);
    });
    setTimeout(()=>{
      this.loadTable();
    },2000);    
  }

  search() {
    console.log('aaaa');
    this.listData = null;
    this.requestGsmService.search(this.searchKey).subscribe(response => {
      console.log(response);
      if (response) {
        this.listData = new MatTableDataSource(response.data);
        this.listData.sort = this.sort;
        this.length =  5;
      }
    });
    
  }
}
