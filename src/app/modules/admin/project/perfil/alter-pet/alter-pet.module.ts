import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterPetComponent } from './alter-pet.component';
import { alterPetRoutes } from 'app/modules/admin/project/perfil/alter-pet/alter-pet.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(alterPetRoutes),
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [AlterPetComponent]
})
export class AlterPetModule { }
