import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', /* component's CSS element Selector */
  templateUrl: './heroes.component.html', /* location of the component's template file */
  styleUrls: ['./heroes.component.css'] /* location of the component's private CSS files */
})
export class HeroesComponent implements OnInit { /* rmb to always export so that it can be imported elsewhere */
  heroes: Hero[];
  //selectedHero: Hero;
  // hero: Hero  = { /* using the hero class here and define the properties */
  //   id: 1,
  //   name: 'Deadpool' 
  // } /* this is no longer a string but rather an object */
  /* hero property - everytime it is added here, it can be added as {{hero}} in the component html
  To see component html, you need to add it to app html as <app-heroes></app-he*/
  constructor(private heroService: HeroService) { }

  ngOnInit() { /* lifecycle hook - for initialisation logic */
    this.getHeroes(); /* declare methods to be initialised here */
  }
  
 /*  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }  no longer used*/ 

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); /* observable.subscribe() - async */
    //this.heroes = this.heroService.getHeroes(); 
    /* this will not work with servers which are async -- need to return observables or Promise */
  }

}
