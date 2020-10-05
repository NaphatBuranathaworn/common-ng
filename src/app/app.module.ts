import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';
import { CoreModule } from './core/core.module';
import { UnauthLayoutComponent } from './core/layout/unauth-layout/unauth-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectLayoutComponent } from './core/layout/project-layout/project-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    UnauthLayoutComponent,
    ProjectLayoutComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
