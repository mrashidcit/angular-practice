import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from "./hero";



@Component({
  selector: 'hero-detail',
  //inputs: ['hero'],
  outputs: ['deleteRequest'],
  template: `
    <div>
        <img src="{{heroImageUrl}}" alt="">
        <span [style.text-decoration]="lineThrough">
            {{prefix}} {{hero?.name}}
        </span>
        <button (click)="delete()">Delete</button>
    </div>
  `,
  styles: ['button {margin-left: 8px} div {margin: 8px 0} img {height: 24px}']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero = new Hero(-1, 'Sleeping', 'Zzzzzzz'); // default sleeping hero

  heroImageUrl = 'images/hero.png';
  lineThrough = '';
  @Input() prefix ;


  // This component make a request but it can't actually delete a hero.
  deleteRequest = new EventEmitter<Hero>();

  delete(){
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }


  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'big-hero-detail',
  template: `
        <div class="detail">
        <img src="{{heroImageUrl}}" alt="">
        <div><b>{{hero?.name}}</b></div>
        <div>Name: {{hero?.name}}</div>
        <div>Emotion: {{hero?.emotion}}</div>
        <div>Birthdate: {{hero?.birthdate}}</div>
        <div>Web: <a href="{{hero?.url}}" target="_blank">{{hero?.url}}</a></div>
        <div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>
        <br clear="all">
        <button (click)="delete()">Delete</button>
</div>
    `,
  styles: [`
    .detail {border: 1px solid black; padding: 4px; max-width: 450px;}
    img { float: left; margin-right: 8px; height: 100px;}
`]
})

export class BigHeroDetailComponent extends HeroDetailComponent {
  @Input() hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
    console.log("delete() method");

  }
}







