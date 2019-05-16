import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; /* constant hero eg stored here */

@Component({
  selector: 'app-heroes', /* component's CSS element Selector */
  templateUrl: './heroes.component.html', /* location of the component's template file */
  styleUrls: ['./heroes.component.css'] /* location of the component's private CSS files */
})
export class HeroesComponent implements OnInit { /* rmb to always export so that it can be imported elsewhere */
  heroes = HEROES;
  // hero: Hero  = { /* using the hero class here and define the properties */
  //   id: 1,
  //   name: 'Deadpool' 
  // } /* this is no longer a string but rather an object */
  /* hero property - everytime it is added here, it can be added as {{hero}} in the component html
  To see component html, you need to add it to app html as <app-heroes></app-he*/
  constructor() { }

  ngOnInit() { /* lifecycle hook - for initialisation logic */
  }

}
