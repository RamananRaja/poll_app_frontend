import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { PollComponent } from './Pages/poll/poll.component';
import { OperationsComponent } from './Pages/operations/operations.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './Pages/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent,
    OperationsComponent,
    ResultComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
