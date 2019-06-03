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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculatorService, HeroService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
