import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  exports: [MatIconModule, MatBadgeModule],
})
export class MaterialModule {}
