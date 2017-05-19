import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Hero} from "../../classes/hero";



@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  @Input() power : string;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges){
    for (let propName in changes){

      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}  `);
      //console.log(`${propName}: currentValue = ${cur},
      //previousValue = ${prev}  `);

    }


  }

  reset() { this.changeLog.length = 0;}

  constructor() { }

  ngOnInit() {
  }

}
