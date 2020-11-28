import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'todo', redirectTo: 'todo/home', pathMatch: 'full'},
  { path: 'todo/home', component: HomeComponent },
  { path: 'todo/info/:id', component: InfoComponent },
  { path: 'todo/create', component: AddComponent },
  { path: 'todo/update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
