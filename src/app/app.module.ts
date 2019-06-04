import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalculatorService } from './services/calculator.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HerolistComponent } from './components/herolist/herolist.component';
import { HeroformComponent } from './components/heroform/heroform.component';
import { ApodComponent } from './components/apod/apod.component';
import { HttpClientModule} from '@angular/common/http';
import { HeroService } from './services/hero.service';
import { ApodService } from './services/apod.service';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { BeersComponent } from './components/beers/beers.component';
import { AlcoholPipe } from './pipes/alcohol.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import {NgPipesModule} from 'ngx-pipes';
import { FormComponent } from './components/form/form.component';
import {UIRouterModule} from "@uirouter/angular";
import { TrivialComponent } from './components/trivial/trivial.component';
import { CardComponent } from './components/card/card.component';

const formState = { name: 'form', url: '/form',  component: FormComponent };
const beersState = { name: 'beers', url: '/beers',  component: BeersComponent };
const apodState = { name: 'apod', url: '/apod',  component: ApodComponent };
const heroesState = { name: 'heroes', url: '/heroes',  component: HeroesComponent };
const Calculator = { name: 'calculator', url: '/calculator',  component: CalculatorComponent };
const Trivial = { name: 'trivial', url: '',  component: TrivialComponent };

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HerolistComponent,
    HeroformComponent,
    ApodComponent,
    BeersComponent,
    AlcoholPipe,
    FormComponent,
    TrivialComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot(),
    Ng5SliderModule,
    NgPipesModule,
    UIRouterModule.forRoot({ states: [ formState, beersState, apodState, heroesState, Calculator, Trivial ], useHash: true })
  ],
  providers: [CalculatorService, HeroService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
