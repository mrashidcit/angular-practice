import { Component } from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";


@Component({
    selector: 'my-heroes',
    providers: [HeroService],
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>

        `
})

export class HeroesComponent {




}