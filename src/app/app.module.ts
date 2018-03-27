import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { QuotesComponent } from "./quotes/quotes.component";

import { QuoteService } from "./core/services/quote.service";

const appRoutes: Routes =[
  { path: "", component: QuotesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
