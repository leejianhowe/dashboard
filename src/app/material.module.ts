import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  exports: [
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class MaterialModule {}
