import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardserviceService } from 'src/app/services/dashboardservice.service';
import { DashboardModel } from 'src/app/models/dashboardModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { ResponseModelObject } from 'src/app/models/responseModelObject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardservice: DashboardserviceService) { }

  listHistory: ResponseModelObject[];
  listResponseHistory: DashboardModel[];
  search: string;
  ngOnInit() {
    this.getAllHistory();
    this.search = '';
  }

  getAllHistory(): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.dashboardservice.getAllHistory().subscribe((res: any[]) => {
      this.listResponseHistory = res.listModel;
      console.log(res.listModel);
    });
  }

  searchHistory(): void{
    this.dashboardservice.searchHistory(this.search).subscribe(data => this.listResponseHistory = data);
  }

}
