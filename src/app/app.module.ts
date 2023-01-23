import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientMock } from "./services/http-client-mock";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerListComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    { provide: HttpClient, useValue: new HttpClientMock() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
