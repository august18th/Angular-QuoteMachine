import { Component, OnInit } from "@angular/core";

import { QuoteService } from "../core/services/quote.service";
import { IQuote } from "../shared/models";

@Component({
    selector: "quote",
    templateUrl: "./quotes.component.html",
    styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {

    quote: IQuote;

    constructor(private quoteService: QuoteService) { }

    getQuote(): void {
        this.quoteService.getQuote().subscribe((quote: IQuote) => {
            this.quote = quote;
        });
    }

    ngOnInit(): void {
        this.getQuote();
    }
}