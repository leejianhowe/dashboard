import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { TicketsComponent } from './components/tickets/tickets.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: '**', redirectTo: 'overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
