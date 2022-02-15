import { Component, OnInit } from '@angular/core';
import { TicketOverview } from '../types/Issue.type';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  date: string = '';
  ticketOverview: TicketOverview = {
    overview: [
      { id: '1', title: 'Unresolved', content: '60' },
      { id: '2', title: 'Overdue', content: '16' },
      { id: '3', title: 'Open', content: '43' },
      { id: '4', title: 'On hold', content: '64' },
    ],
    unresolved: [
      {
        title: 'Waiting on Feature Request',
        value: '4238',
      },
      {
        title: 'Awaiting Customer Response',
        value: '1005',
      },
      {
        title: 'Awaiting Developer Fix',
        value: '914',
      },
      {
        title: 'Pending',
        value: '281',
      },
    ],
    chart: {
      stats: [
        {
          title: 'Resolved',
          value: '449',
        },
        {
          title: 'Received',
          value: '426',
        },
        {
          title: 'Average first response time',
          value: '33m',
        },
        {
          title: 'Average response time',
          value: '3h 8m',
        },
        {
          title: 'Resolution within SLA',
          value: '94%',
        },
      ],
    },
  };
  isSelected: string = '';
  handleClick(id: string) {
    this.isSelected = id;
  }
  constructor() {}

  ngOnInit(): void {
    this.date = new Date().toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }
}
