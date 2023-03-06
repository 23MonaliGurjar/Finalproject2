import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
