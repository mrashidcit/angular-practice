// Observal Version
import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Hero} from "./hero";
import {Observable} from "rxjs";
import {requestOptionsProvider} from "../default-request-options.service";


@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; // URL to web API

    constructor (private http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);

    } // end getHeroes()

    create(name: string): Observable<Hero> {
        //let headers = new Headers({ 'Content-Type': 'application/json'});
        //let options = new RequestOptions({ headers: headers });

        return this.http.post(this.heroesUrl, { name }, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        //
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any){

        let errMsg: string;
        if(error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText} || '' ${err}`;

        } else {
            errMsg = "Server not Responding.";
            //errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}

