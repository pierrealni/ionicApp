import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import { IProduct } from './product';

@Injectable()
export class InstitutionService {
    private _url = 'institutions.json';
    constructor(private http: Http) { }

    getInstitutions(): Observable<any[]> {
        return this.http.get(this._url)
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}