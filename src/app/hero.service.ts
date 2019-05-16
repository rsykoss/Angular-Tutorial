/* Services are a great way to share information among classes that don't know each other. */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ /* @Injectable means dependency injection system */
  providedIn: 'root' /* to inject it in, need to register with provider */
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> { /* to generate async for request - requires observable and message component */
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES)
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
/*   getHeroes(): Hero[] {
    return HEROES;
  } */
  
  /* service in service - inject message service into hero service which is injected into heroes component */
}
