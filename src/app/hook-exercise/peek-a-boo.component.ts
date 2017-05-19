import {
    OnInit, SimpleChanges, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy
} from "@angular/core";
import {LoggerService} from "../logger.service";
import {Component, Input} from "@angular/core/src/metadata/directives";


let nextId = 1;

export class PeekABoo implements OnInit {

    constructor(private logger: LoggerService) { }

    // implement OnInit's  `ngOnInit` method
    ngOnInit() { this.logIt(`OnInit`); }

    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`);
    }


}
@Component({
    selector: 'peek-a-boo',
    template: '<p>Now you see my hero, {{name}}</p>',
    styles: ['p {background: LightYellow; padding: 8px}']
})

// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.

export class PeekABooComponent extends PeekABoo implements
           OnChanges, OnInit, DoCheck,
            AfterContentInit, AfterContentChecked,
            AfterViewInit, AfterViewChecked,
            OnDestroy{
    @Input() name: string;

    private verb = 'initialized';

    constructor(logger: LoggerService) {
        super(logger);

        let is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at construction`);

    }

    // only called for/if there is an @input
    // variable set by parent.
    ngOnChanges(changes: SimpleChanges) {
        let changesMsgs: string[] = [];
        for (let propName in changes){
            if(propName === 'name'){
                let name = changes['name'].currentValue;
                changesMsgs.push(`name ${this.verb} to 
                                        "${name}"`);

            } else {
                changesMsgs.push(propName + ' ' +
                    this.verb);

            }
        } // end for

        this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
        this.verb = 'changed'; // next time it will be change
    }

    // Beware! Called frequently!
    // CAlled in every change dectection cycle anywhere on the page
    ngDoCheck() { this.logIt('DoCheck'); }

    ngAfterContentInit() { this.logIt(`AfterContentInit`); }

    // Beware! CAlled frequently!
    // Called in every change detection cycle
    // anywhere on the page
    ngAfterContentChecked() {
        this.logIt(`AfterContentChecked`);
    }

    ngAfterViewInit() { this.logIt(`AfterViewInit`); }

    // Beware! CAlled frequently!
    // Called in every change detection cycle
    // anywhere on the page
    ngAfterViewChecked() { this.logIt(`AfterViewChecked`)};

    ngOnDestroy() { this.logIt(`OnDestroy`); }

}
























