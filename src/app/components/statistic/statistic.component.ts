import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { StatisticService } from 'src/app/services/statistic.service';
import { StatisticModel } from 'src/app/models/StatisticModel';
// import $ from "jquery";
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private statisticService: StatisticService) { }

  listRevenue: StatisticModel[];
  listRevenueGain: any[];
  listRevenueDate: any[];


  barchart: any;
  barChartHome:any;
  ngOnInit() {
    this.getStatisticInMonth();
  }

  getStatisticInMonth(): void {
    this.listRevenueDate = [];
    this.listRevenueGain = [];
    // tslint:disable-next-line: no-shadowed-variable
    this.statisticService.getAllHistory().subscribe((res) => {
      this.listRevenue = res.data;
      this.listRevenue = this.listRevenue.reverse();
      this.listRevenue.forEach(element => {
        this.listRevenueGain.push(element.gain);
        this.listRevenueDate.push(element.dateGain);
      });
      this.barchart = new Chart('lineChart', {
        type: 'bar',
        data: {
          labels: this.listRevenueDate,
          datasets: [
            {
              data: this.listRevenueGain,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red",
                "Blue"
              ],
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Thống Kê Theo Tháng'
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
      this.barChartHome = new Chart('barChartHome', {
        type: 'doughnut',
        data: {
          labels: this.listRevenueDate,
          datasets: [
            {
              data: this.listRevenueGain,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red",
                "Blue"
              ],
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Thống Kê Theo Tháng'
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
      console.log(res);
    });
  }


}
