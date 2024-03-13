import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe, FormsModule, HeroDetailComponent, RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes => this.heroes = heroes));
  }

}
