import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterPetComponent } from './alter-pet.component';
import { alterPetRoutes } from 'app/modules/admin/project/alter-pet/alter-pet.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(alterPetRoutes),
  ],
  declarations: [AlterPetComponent]
})
export class AlterPetModule { }
