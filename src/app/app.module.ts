import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IconOverview } from './components/icons/overview/overview.component';
import { IconTickets } from './components/icons/tickets/tickets.component';
import { IconSearch } from './components/icons/search/search.component';
import { IconNotifications } from './components/icons/notifications/notifications.component';
import { CardComponent } from './components/card/card.component';
import { OverviewChartComponent } from './overview-chart/overview-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    OverviewComponent,
    NavbarComponent,
    HeaderComponent,
    IconOverview,
    IconTickets,
    IconSearch,
    IconNotifications,
    CardComponent,
    OverviewChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
