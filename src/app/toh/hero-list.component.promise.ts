// Promise Version
import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service.promise";
import {Hero} from "./hero";


@Component({
    selector: 'hero-list-promise',
    templateUrl: './hero-list.component.html',
    providers: [HeroService],
    styles: ['.error {color:red;}']
})

export class HeroListPromiseComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'Promise';

    constructor (private heroService: HeroService) { }

    ngOnInit() { this.getHeroes(); }

    getHeroes() {
        this.heroService.getHeroes()
            .then(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error);
    } // end getHero()

    addHero (name: string){
        if (!name) { return; }
        this.heroService.create(name)
            .then(
                hero => this.heroes.push(hero),
                error => this.errorMessage = <any>error
            );
    }


}