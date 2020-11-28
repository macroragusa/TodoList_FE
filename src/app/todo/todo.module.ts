import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [HomeComponent, InfoComponent, AddComponent, UpdateComponent, InfoComponent],
  exports: [
    HomeComponent,
    InfoComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
