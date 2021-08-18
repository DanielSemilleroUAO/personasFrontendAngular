import { ListPersonsComponent } from './list-persons/list-persons.component';
import { PersonComponent } from './person/person.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'persona', component: ListPersonsComponent},
  {path:'personas/:id', component: PersonComponent},
  {path:'logout', component: LogoutComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
