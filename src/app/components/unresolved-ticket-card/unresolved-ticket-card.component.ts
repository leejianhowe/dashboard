import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../types/Issue.type';

@Component({
  selector: 'app-unresolved-ticket-card',
  templateUrl: './unresolved-ticket-card.component.html',
  styleUrls: ['./unresolved-ticket-card.component.css'],
})
export class UnresolvedTicketCardComponent implements OnInit {
  title: string = 'Unresolved tickets';
  subtitle: string = 'Group';
  group: string = 'Support';
  cta: string = 'View Details';
  @Input() data: CardData[] = [];

  constructor() {}

  ngOnInit(): void {}
}
