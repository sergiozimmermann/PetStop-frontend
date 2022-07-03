import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarComponent } from './adicionar.component';
import { adicionarRoutes } from 'app/modules/admin/project/adicionar/adicionar.routing';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'app/shared/shared.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adicionarRoutes),
    //NgModule,
    //MatInputModule*
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AdicionarComponent]
})
export class AdicionarModule { }
