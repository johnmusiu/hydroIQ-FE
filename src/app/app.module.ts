import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskComponent } from './_components/tasks/tasks.component';
import { NavComponent } from './_components/nav/nav.component';
import { FooterComponent } from './_components/footer/footer.component';
import { TaskModalComponent } from './_components/task-modal/task-modal.component';
import { AlertComponent } from './_components/alert/alert.component';
import { LoginComponent } from './account/login/login.component';
import { LayoutComponent } from './account/layout/layout.component';
import { ErrorInterceptor } from './_helpers/error.inceptor';
import { TokenInterceptor } from './_helpers/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavComponent,
    FooterComponent,
    TaskModalComponent,
    AlertComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, ReactiveFormsModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
