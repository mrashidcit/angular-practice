import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Hero} from "./hero";

export enum Color {Red, Green, Blue};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{

  @Output('myClick') clicks = new EventEmitter<string>();

  title = 'Template Syntax';
  evilTitle = 'Template <script>alert("evil never sleeps") </script>Syntax';

  name: string = Hero.heroes[0].name;
  hero: Hero; // defined to demonstrate template context precedence
  heroes: Hero[];
  currentHero: Hero;

  trackByHeroes(index: number, hero: Hero):number
          { return hero.id;}

  trackById(index: number, item: any):
      number { return item['id']; }

  currentStyles: {};


  heroImageUrl = 'images/hero.png';
  villainImageUrl = 'images/villain.png';

  // trackBy change counting
  heroesNoTrackByCount = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;


  iconUrl = 'images/ng-logo.png';
  isActive = false;
  isSpecial = true;
  isUnchanged = true;
  canSave = true;

  get nullHero(): Hero { return null;}



  actionName = 'Go for it';
  badCurly = 'bad curly';
  classes = 'special';
  help = '';



  clicked = '';
  clickMessage = '';
  clickMessage2 = '';

  Color = Color;
  color = Color.Red;
  colorToggle() {
    this.color = (this.color === Color.Red) ?
        Color.Blue : Color.Red
  }


  fontSizePx = 16;

  ngOnInit() {
    this.resetHeroes();
    this.setCurrentStyles();


  }

  constructor() {

  }

  // updates with fresh set of cloned heroes
  resetHeroes(){
    this.heroes =
        Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.setCurrentClasses();


  }

  setCurrentStyles(){
      // CSS styles: set per current state of component properties
      this.currentStyles = {
          'font-style': this.canSave ? 'italic' : 'normal',
          'font-weight' : !this.isUnchanged ? 'bold' : 'normal',
          'font-size' : this.isSpecial ? '24px' : '12px'

      };
  }

  setUppercaseName(name: string){
    this.currentHero.name = name.toUpperCase();
  }

  getVal(): number { return 2; }

  deleteHero(hero: Hero) {
    console.log(hero);
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }


  alert(msg?: string) { window.alert(msg); }
  callFax(value: string) { this.alert(`Faxing ${value} ...`); }
  callPhone(value: string) { this.alert(`Calling ${value} ...` ); }


  onSave(event: KeyboardEvent){
    let evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).innerText : '';
    this.alert('Saved. ' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  onClickMe(event: KeyboardEvent){
    let evtMsg = event ? ' Event target class is ' + (<HTMLElement>event.target).className : '';
    this.alert('Click me. ' + evtMsg);
  }

  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };

  } // end currentClasses

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }




  onSubmit() { /* referenced but not used */}

  product = {
    name: 'frimfram',
    price: 42
  };
}

