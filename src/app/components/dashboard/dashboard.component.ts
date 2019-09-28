import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardserviceService } from 'src/app/services/dashboardservice.service';
import { DashboardModel } from 'src/app/models/dashboardModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardservice: DashboardserviceService) { }

  listHistory: DashboardModel[];

  ngOnInit() {
    this.getAllHistory();
  }

  getAllHistory(): void {
    this.dashboardservice.getAllHistory().subscribe(data => this.listHistory = data);
  }

}
