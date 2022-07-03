import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AparelhosComponent } from './aparelhos.component';
import { aparelhosRoutes } from 'app/modules/admin/project/aparelhos/aparelhos.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(aparelhosRoutes),
    CommonModule
  ],
  declarations: [AparelhosComponent]
})
export class AparelhosModule { }
