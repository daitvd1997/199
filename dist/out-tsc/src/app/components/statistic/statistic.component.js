import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
// import $ from "jquery";
let StatisticComponent = class StatisticComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatisticComponent = tslib_1.__decorate([
    Component({
        selector: 'app-statistic',
        templateUrl: './statistic.component.html',
        styleUrls: ['./statistic.component.css']
    })
], StatisticComponent);
export { StatisticComponent };
/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {
    'use strict';
    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var legendState = true;
    if ($(window).outerWidth() < 576) {
        legendState = false;
    }
    var LINECHART = $('#lineCahrt');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        }
                    }]
            },
            legend: {
                display: legendState
            }
        },
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "22"],
            datasets: [
                {
                    label: "Doanh Thu Tháng 9",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: '#f15765',
                    pointBorderColor: '#da4c59',
                    pointHoverBackgroundColor: '#da4c59',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [50, 20, 60, 31, 52, 22, 40, 25, 30, 68, 56, 40, 60, 43, 55, 39, 47],
                    spanGaps: false
                }
            ]
        }
    });
    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var BARCHARTHOME = $('#barChartHome');
    var barChartHome = new Chart(BARCHARTHOME, {
        type: 'bar',
        options: {
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["Monday", "Tuesday", "Wennesday", "Thusday", "Friday", "Sarturday", "Sunday"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                    ],
                    borderColor: [
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                    ],
                    borderWidth: 1,
                    data: [95, 85, 40, 30, 27, 22, 15]
                }
            ]
        }
    });
});
//# sourceMappingURL=statistic.component.js.map