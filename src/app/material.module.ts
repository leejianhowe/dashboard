import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [MatIconModule, MatBadgeModule, MatCardModule, MatFormFieldModule],
})
export class MaterialModule {}
