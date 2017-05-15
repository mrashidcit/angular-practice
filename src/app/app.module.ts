import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {HeroDetailComponent, BigHeroDetailComponent} from './hero-detail.component';
import { MySizerComponent } from './my-sizer.component';
import {
    HeroSwitchComponent, HappyHeroComponent, SadHeroComponent,
    ConfusedHeroComponent, UnknownHeroComponent
} from './hero-switch.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  declarations: [
      AppComponent,
      HeroDetailComponent,
      BigHeroDetailComponent,
      MySizerComponent,
      HeroSwitchComponent,
      HappyHeroComponent,
      SadHeroComponent,
      ConfusedHeroComponent,
      UnknownHeroComponent,
      HeroFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]


})

export class AppModule { }
