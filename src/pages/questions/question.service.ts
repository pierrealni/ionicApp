import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class QuestionService {

    constructor(private db:AngularFireDatabase) {}

    /*getQuestionsPerAdmissionExam(key: string): Observable<any[]> {
        return this.db.list('questions', 
        { 
            query : { orderByChild: 'examId', equalTo: key }
        })
            .do(data => console.log(data))
            .catch(this.handleError);
    }*/

    getQuestion(key: string): Observable<any[]> {
        return this.db.object('questions/'+key)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getExamAreaQuestionsPerExamArea(key: string): Observable<any[]> {
        return this.db.list('examAreaQuestions', 
        { 
            query : { orderByChild: 'examAreaId', equalTo: key }
        })
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    getExamAreasPerExam(key: string): Observable<any[]> {
        return this.db.list('examAreas', 
        { 
            query : { orderByChild: 'examId', equalTo: key }
        })
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}