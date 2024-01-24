import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InterceptorInterceptor} from "./interceptor.interceptor";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
