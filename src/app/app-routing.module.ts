import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './_components/create-task/create-task.component';
import { CreateUserComponent } from './_components/create-user/create-user.component';

import { TaskComponent } from './_components/tasks/tasks.component';
import { AuthGuard } from './_helpers/auth.guard';

const accountModule = () =>
  import('./account/account-routing.module').then(
    (x) => x.AccountRoutingModule
  );

const routes: Routes = [
  { path: '', component: TaskComponent, canActivate: [AuthGuard] },
  { path: 'create-task', component: CreateTaskComponent, canActivate: [AuthGuard]},
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard]},
  { path: 'account', loadChildren: accountModule },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
