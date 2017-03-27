import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class AdmissionExamService {
    constructor(private db:AngularFireDatabase) { }

    /*getAdmissionExams(): Observable<any[]> {
        return this.http.get(this._url)
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }*/

    getAdmissionExams():  Observable<any[]> {
        return this.db.list('admissionExams')
            .do(data => console.log(data))
            .catch(this.handleError);
            /*
            //.map(Institution.fromJsonList);
            //.map((response: Response) => <any[]>response.json())
            */
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}