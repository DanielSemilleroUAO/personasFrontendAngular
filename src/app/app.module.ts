import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    ErrorComponent,
    ListPersonsComponent,
    LoginComponent,
    LogoutComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
