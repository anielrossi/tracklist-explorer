import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyDashboardComponent } from './dependency-dashboard/dependency-dashboard.component';
import { PickarecordComponent } from './pickarecord/pickarecord.component';

@NgModule({
  declarations: [
    AppComponent,
    DependencyDashboardComponent,
    PickarecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
