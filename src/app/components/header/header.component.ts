import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  header: string = '';
  routerSubscription: Subscription;
  hasNotifications: boolean = false;
  iconHeight: string = '1rem';
  iconWidth: string = '1rem';
  constructor(private router: Router) {}
  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.header = event.url.split('/')[1];
      });
    this.hasNotifications = true;
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
