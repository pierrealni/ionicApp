import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class InstitutionService {
    constructor(private db:AngularFireDatabase) {}

    getInstitutions(): Observable<any[]> {
        return this.db.list('institutions')
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