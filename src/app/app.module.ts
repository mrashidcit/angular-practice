import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from "./app.component";

import { HeroListComponent } from './toh/hero-list.component';
import {HeroData} from "./hero-data";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HeroListPromiseComponent} from "./toh/hero-list.component.promise";




@NgModule({
  declarations: [
      AppComponent,
      HeroListComponent,
      HeroListPromiseComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
      InMemoryWebApiModule.forRoot(HeroData)

  ],
  providers: [

  ],
  bootstrap: [AppComponent]


})

export class AppModule { }
