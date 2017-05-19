import { Component, OnInit } from '@angular/core';
import {Hero} from "../../classes/hero";
import {OnChangesComponent} from "../on-changes/on-changes.component";
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent implements OnInit {
  hero: Hero;
  power: string;
  title = 'OnChanges';

  @ViewChild(OnChangesComponent) childView: OnChangesComponent;
  constructor() { this.reset(); }

  ngOnInit() {

  }

  reset() {
    // new Hero object every time; trigger onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if(this.childView) { this.childView.reset(); }
  }

}
