import {Component, OnInit, AfterContentInit, AfterContentChecked} from '@angular/core';
import {ChildComponent} from "../child.component";
import {ContentChild} from "@angular/core/src/metadata/di";
import {LoggerService} from "../../../logger.service";

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements OnInit,
                  AfterContentInit, AfterContentChecked {
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild: ChildComponent;


  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');

  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked(){
    // contentChild is updated after the content
    // has been checked
    if (this.prevHero === this.contentChild.hero){
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }

  }


  // This surrogate for real business logic sets the `comment`
  private doSomething(){
    let c = this.contentChild.hero.length > 10 ?
            `That's a long name` : '';
    this.comment = c;

  }


  private logIt(method: string){
    let child = this.contentChild;
    let message = `${method}: ${child ? 
        child.hero : 'no'} child content`;
    this.logger.log(message);
  }


  ngOnInit() {
  }

}
