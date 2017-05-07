import { Component } from '@angular/core';

import {heroServiceProvider} from "./hero.service.provider";


@Component({
    selector: 'my-heroes',
    providers: [heroServiceProvider],
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>

        `,

})

export class HeroesComponent {




}