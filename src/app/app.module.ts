import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CurrencyComponent } from './currency/currency.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule,
    RouterModule.forRoot([
      { path: '', component: CurrencyComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CurrencyComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }