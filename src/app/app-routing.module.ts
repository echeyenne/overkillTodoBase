import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDescriptionComponent } from './components/todo-description/todo-description.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      { path: 'details/:id', component: TodoDescriptionComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
