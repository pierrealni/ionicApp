import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdmissionExamService {
    private _url = 'admissionExams.json';
    constructor(private http: Http) { }

    getAdmissionExams(): Observable<any[]> {
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