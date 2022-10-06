import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';

const routes:Routes =[
  {
    path:'',
    component:ListComponent,
    children:[
      {
        path:'filter',
        component:FilterComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    ListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ListModule { }
