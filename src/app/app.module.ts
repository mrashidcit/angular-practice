import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";

import {HeroData} from "./hero-data";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import { PeekABooParentComponent } from './hook-exercise/peek-a-boo-parent/peek-a-boo-parent.component';
import {PeekABooComponent} from "./hook-exercise/peek-a-boo.component";
import {LoggerService} from "./logger.service";
import { SpyDirective } from './hook-exercise/spy/spy.directive';
import { SpyComponent } from './hook-exercise/spy/spy.component';
import { OnChangesComponent } from './hook-exercise/on-changes/on-changes.component';
import { OnChangesParentComponent } from './hook-exercise/on-changes-parent/on-changes-parent.component';
import { DoCheckComponent } from './hook-exercise/do-check/do-check.component';
import { DoCheckParentComponent } from './hook-exercise/do-check-parent/do-check-parent.component';
import { AfterViewComponent } from './hook-exercise/after-view/after-view/after-view.component';
import { ChildViewComponent } from './hook-exercise/after-view/child-view/child-view.component';
import {AfterViewParentComponent} from "./hook-exercise/after-view/after-view-parent/after-view-parent.component";
import { AfterContentParentComponent } from './hook-exercise/after-content-parent/after-content-parent.component';

import { AfterContentComponent } from './hook-exercise/after-content-parent/after-content/after-content.component';
import { ChildComponent } from './hook-exercise/after-content-parent/child.component';
import { CounterParentComponent } from './hook-exercise/counter-parent/counter-parent.component';
import { CounterComponent } from './hook-exercise/counter-parent/counter/counter.component';






@NgModule({
  declarations: [
      AppComponent,
      PeekABooParentComponent,
      PeekABooComponent,
      SpyComponent,
      SpyDirective,
      OnChangesComponent,
      OnChangesParentComponent,
      DoCheckComponent,
      DoCheckParentComponent,
      AfterViewComponent,
      ChildViewComponent,
      AfterViewParentComponent,
      AfterContentParentComponent,
      AfterContentComponent,
      ChildComponent,
      CounterParentComponent,
      CounterComponent,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(HeroData),


  ],
  providers: [
      LoggerService

  ],
  bootstrap: [AppComponent]


})

export class AppModule { }
