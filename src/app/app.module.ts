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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot(),
    Ng5SliderModule,
    NgPipesModule
  ],
  providers: [CalculatorService, HeroService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
