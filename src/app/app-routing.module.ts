import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicSlugComponent } from './tasks/dynamic-slug/dynamic-slug.component';
import { TaskNineComponent } from './tasks/task-nine/task-nine.component';

const routes: Routes = [
  {
    path: 'ex-8a',
    component: TaskNineComponent
  },
  {
    path: 'ex-8b',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'ex-8c',
    children: [
      {
        path: ':slug',
        component: DynamicSlugComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
