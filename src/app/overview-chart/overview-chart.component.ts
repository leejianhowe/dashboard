import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import {
  ChartDataSets,
  ChartLegendLabelItem,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-overview-chart',
  templateUrl: './overview-chart.component.html',
  styleUrls: ['./overview-chart.component.css'],
})
export class OverviewChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      data: [
        15, 20, 25, 30, 28, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 18, 25,
        30, 38,
      ],
      label: 'Today',
      fill: true,
    },
    {
      data: [
        35, 28, 25, 28, 35, 40, 45, 50, 45, 40, 35, 30, 18, 25, 30, 38, 29, 26,
        20, 24,
      ],
      fill: false,
      label: 'Yesterday',
    },
  ];

  public lineChartLabels: Label[] = new Array(24)
    .fill(0)
    .map((_, idx) => idx.toString());
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    elements: {
      point: {},
      line: {
        borderJoinStyle: 'round',
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 60,
            min: 0,
            stepSize: 10,
          },
          position: 'right',
          gridLines: {
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: {
      position: 'nearest',
      yPadding: 7,
      xPadding: 12,
      backgroundColor: '#fff',
      bodyFontColor: '#252733',
      bodyAlign: 'center',
      bodyFontFamily: 'Mulish',
      bodyFontSize: 14,
      displayColors: false,
      caretPadding: 2,
      callbacks: {
        title: (item, data) => {
          return '';
        },
        label: (item, data) => {
          return item.value;
        },
      },
      custom: function (tooltipModel) {
        //Top-Left
        tooltipModel.caretY = tooltipModel.y;
        tooltipModel.caretX = tooltipModel.x;
        tooltipModel.width = 64;
        tooltipModel.height = 30;
        // tooltipModel.x = tooltipModel.x - tooltipModel.width / 2 ;
        // tooltipModel.y = tooltipModel.y - 30;
      }.bind(this),
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#3751FF',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 7,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#3751FF',
      pointHoverBorderWidth: 5,
    },
    {
      pointRadius: 0,
      pointHoverRadius: 0,
      borderColor: '#DFE0EB',
      borderWidth: 2,
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {
    const canvas = document.getElementById(
      'overview-chart'
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const gradientFill = ctx.createLinearGradient(0, 0, 1185, 0);
    gradientFill.addColorStop(0, 'rgba(55, 81, 255, 0.1)');
    gradientFill.addColorStop(1, 'rgba(55, 81, 255, 0)');
    this.lineChartData[0].backgroundColor = gradientFill;
  }
}
