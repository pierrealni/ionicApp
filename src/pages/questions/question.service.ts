import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class QuestionService {

    constructor(private db:AngularFireDatabase) {}

    getQuestionsPerAdmissionExam(key: string): Observable<any[]> {
        return this.db.list('questions', 
        { 
            query : { indexOn: 'admissionExamId', orderByChild: 'admissionExamId', equalTo: key }
        })
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}