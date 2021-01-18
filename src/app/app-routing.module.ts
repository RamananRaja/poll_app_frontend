import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { OperationsComponent } from './Pages/operations/operations.component';
import { PollComponent } from './Pages/poll/poll.component';
import { ResultComponent } from './Pages/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'poll', component: PollComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
