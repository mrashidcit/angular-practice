import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroService} from "./heroes/hero.service";
import {Logger} from "./logger.service";
import {UserService} from "./user.service";
import {InjectorComponent} from "./injector.component";

@NgModule({
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroListComponent,
      InjectorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [
      Logger,
      UserService

  ],
  bootstrap: [AppComponent]


})

export class AppModule { }
