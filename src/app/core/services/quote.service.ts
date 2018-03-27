import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Observable } from "rxjs/Observable";
import { map, catchError } from "rxjs/operators";

import { IQuote } from "../../shared/models";

@Injectable()
export class QuoteService {

    baseUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";

    constructor(private http: HttpClient) { }

    getQuote(): Observable<IQuote> {
        const myHeaders: HttpHeaders = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set("X-Mashape-Key", "wotECOmjqNmsh0NqpP1CkBfVv4rup1FPHEAjsnnfBl50f11iUm");
        return this.http.get<IQuote>(this.baseUrl, { headers: myHeaders })
            .pipe(
                map(quotes => {
                    return quotes;
                })
            );
    }
}