import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.css'],
})
export class TasksCardComponent implements OnInit {
  title: string = 'Tasks';
  subtitle: string = 'Today';
  showPrefix: boolean = false;
  cta: string = 'View All';
  name: string = '';
  data = [
    {
      id: '1',
      name: 'Finish ticket update',
      category: 'urgent',
      selected: false,
    },
    {
      id: '2',
      name: 'Create new ticket example',
      category: 'new',
      selected: false,
    },
    {
      id: '3',
      name: 'Update ticket report',
      category: 'default',
      selected: true,
    },
  ];
  checkCategory(category) {
    switch (category) {
      case 'urgent':
        return 'urgent';
      case 'new':
        return 'new';
      default:
        return 'default';
    }
  }
  createTask() {
    this.data.push({
      id: Date.now().toString(),
      name: this.name,
      category: 'default',
      selected: false,
    });
    this.name = '';
  }
  changeSelected(id) {
    const task = this.data.findIndex((ele) => ele.id === id);
    if (task) {
      this.data[task].selected = !this.data[task].selected;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
