import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { ProjectsModule } from './projects/projects.module';


import { CoreModule } from './core/core.module';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports:      [
    BrowserModule, FormsModule, AppRoutingModule,
    CoreModule, HomeModule, AboutModule, HobbiesModule, ProjectsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
