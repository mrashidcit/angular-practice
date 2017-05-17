import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {WikipediaService} from "./wikipedia.service";

@Component({
  selector: 'my-wiki',
  templateUrl: './wiki.component.html',
})
export class WikiComponent implements OnInit {
  items: Observable<string[]>
  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
  }

  search (term: string) {
    this.items = this.wikipediaService.search(term);

  }

}
