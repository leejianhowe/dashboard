import { Component, OnInit } from '@angular/core';
import { TicketOverview } from '../types/Issue.type';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  ticketOverview: TicketOverview = {
    overview: [
      { id: '1', title: 'Unresolved', content: '60' },
      { id: '2', title: 'Overdue', content: '16' },
      { id: '3', title: 'Open', content: '43' },
      { id: '4', title: 'On hold', content: '64' },
    ],
    unresolved: {
      cust_res: 1005,
      dev_fix: 914,
      feature_req: 4238,
      pending: 281,
    },
  };
  isSelected: string = '';
  handleClick(id: string) {
    this.isSelected = id;
  }
  constructor() {}

  ngOnInit(): void {}
}
