import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarComponent } from './adicionar.component';
import { adicionarRoutes } from 'app/modules/admin/project/adicionar/adicionar.routing';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adicionarRoutes),
    NgModule,
    MatInputModule
  ],
  declarations: [AdicionarComponent]
})
export class AdicionarModule { }
