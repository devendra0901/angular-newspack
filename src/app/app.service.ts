import { Sources } from './sources';
import { Article } from './article';
import {  Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';


@Injectable()


export class AppService {
  private newsUrl = 'https://newsapi.org/v1/articles?source=';
  private newsSources = 'https://newsapi.org/v1/sources';

  private apiKey = 'apiKey=990242f1a6474609b570e6d7ad114f67';

  constructor(private http: Http) { }
    /************************************
     getData() makes http request based on source input
     ************************************/
  getData(s: string): Promise<Article[]> {
      const url = `${this.newsUrl}${s}&${this.apiKey}`;
    return this.http.get(url)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

    /**************************************************
     extractData() extracts required data from json file
     ****************************************************/


    private extractData(res: Response) {
        const body = res.json().articles;
        return body || [];
    }

    /************************************************
     handleError() handles error during http request
     *************************************************/
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    /*******************************************************************
     getSourcesByCategory() makes http request based on category input
     ********************************************************************/

    getSourcesByCategory(s: string): Promise<Sources[]> {
        const url = `${this.newsSources}?category=${s}`;
      return this.http.get(url)
                  .toPromise()
                  .then(this.extractSources)
                  .catch(this.handleError);
    }

     /*******************************************************************
     getSources() makes http request to get all available news sources
     ********************************************************************/
    getSources(): Promise<Sources[]> {
        return this.http.get(this.newsSources)
                    .toPromise()
                    .then(this.extractSources)
                    .catch(this.handleError);
      }
    private extractSources(res: Response) {
        const body = res.json().sources;
        return body || [];
    }


//   getHeroesSlowly(): Promise<Hero[]> {
//     return new Promise(resolve => {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(this.getHeroes()), 2000);
//     });
//   }

//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }
//   getHero(id: number): Promise<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get(url)
//       .toPromise()
//       .then(response => response.json().data as Hero)
//       .catch(this.handleError);
//   }
}
