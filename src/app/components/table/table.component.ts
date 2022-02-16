import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  issueName: string;

  name: string;

  shortDate: string;
  time: string;

  priority: string;
  color: string;
  numDate: string;

  lastupdated: string;
  profileurl:string
}

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const ISSUE_NAME: string[] = [
  'Contact Email not Linked',
  'Adding Images to Featured Posts',
  'When will I be charged this month?',
  'Payment not going through',
  'Unable to add replies',
  'Downtime since last week',
  'Referral Bonus',
  'How do I change my password?',
];

const PRIORITY: { priority: string; color: string }[] = [
  {
    priority: 'high',
    color: '#F12B2C',
  },
  {
    priority: 'low',
    color: '#FEC400',
  },
  {
    priority: 'normal',
    color: '#29CC97',
  },
];

const DATES: string[] = ['14 Feb 2022', '15 Feb 2022', '13 Feb 2022'];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'shortDate', 'priority','options'];
  dataSource: MatTableDataSource<UserData>;
  currentid: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  handleSelect(row) {
    this.currentid = row.id;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  const { priority, color } =
    PRIORITY[Math.round(Math.random() * (PRIORITY.length - 1))];
  const currentTime = new Date();
  const reportedTime = new Date(
    DATES[Math.round(Math.random() * (DATES.length - 1))]
  );
  const numberOfDays =
    (currentTime.getTime() - reportedTime.getTime()) / (1000 * 60 * 60 * 24);
  const shortDate = reportedTime.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const numDate = reportedTime.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).replace(/\//g,".");

  const time = reportedTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
  const lastupdated =
    Math.floor(numberOfDays) < 2
      ? `Updated ${Math.floor(numberOfDays)} day ago`
      : `Updated ${Math.floor(numberOfDays)} days ago`;

  const profileurl = `https://ui-avatars.com/api/?name=${name.split(" ").join("+")}`
  return {
    id: id.toString(),
    name: name,
    priority,
    color,
    issueName: ISSUE_NAME[Math.round(Math.random() * (ISSUE_NAME.length - 1))],
    shortDate,
    time,
    lastupdated,
    numDate,
    profileurl
  };
}
