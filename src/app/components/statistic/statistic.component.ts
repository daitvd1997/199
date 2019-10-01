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


  barchart = [];
  ngOnInit() {
    this.getStatisticInMonth();
  }

  getStatisticInMonth(): void {
    this.listRevenueDate = [];
    this.listRevenueGain = [];
    // tslint:disable-next-line: no-shadowed-variable
    this.statisticService.getAllHistory().subscribe((res: any) => {
      this.listRevenue = res;
      this.listRevenue.forEach(element => {
        this.listRevenueGain.push(element.gain);
        this.listRevenueDate.push(element.dateGain);
      });
      this.barchart = new Chart('lineChart', {
        type: 'line',
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

// /*global $, document, Chart, LINECHART, data, options, window*/
// $(document).ready(function () {

//   'use strict';

//   // ------------------------------------------------------- //
//   // Line Chart
//   // ------------------------------------------------------ //
//   let legendState = true;
//   if ($(window).outerWidth() < 576) {
//     legendState = false;
//   }


//   // ------------------------------------------------------- //
//   // Bar Chart
//   // ------------------------------------------------------ //
//   let BARCHARTHOME = $('#barChartHome');
//   let barChartHome = new Chart(BARCHARTHOME, {
//     type: 'bar',
//     options:
//     {
//       scales:
//       {
//         xAxes: [{
//           display: false
//         }],
//         yAxes: [{
//           display: false
//         }],
//       },
//       legend: {
//         display: false
//       }
//     },
//     data: {
//       labels: ["Monday", "Tuesday", "Wennesday", "Thusday", "Friday", "Sarturday", "Sunday"],
//       datasets: [
//         {
//           label: "Data Set 1",
//           backgroundColor: [
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//           ],
//           borderColor: [
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//             'rgb(121, 106, 238)',
//           ],
//           borderWidth: 1,
//           data: this.listRevenue.gain
//         }
//       ]
//     }
//   });

// });
