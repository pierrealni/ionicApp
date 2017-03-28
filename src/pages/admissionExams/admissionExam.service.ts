import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class AdmissionExamService {
    constructor(private db:AngularFireDatabase) { }

   
    getAdmissionExamsPerInstitution(key: string): Observable<any[]>{
        return  this.db.list('admissionExams', 
        { 
            query : { indexOn: 'institutionId', orderByChild: 'institutionId', equalTo: key }
        })
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    /*
    admissionExamsPerInstitution(key: string): any[]{
        let admissionExams: any = []
        this.getAdmissionExamsPerInstitution(key)
        .subscribe(
                (admissionExamsIds) => { 
                    admissionExamsIds.forEach( (item) =>
                        {
                            this.getAdmissionExam(item.$key)
                            .subscribe( (_admissionExam) => { admissionExams.push(_admissionExam)} );
                        }
                    )
                }
		    );
        return admissionExams;
    }
    getAdmissionExamsPerInstitution(key:string):  Observable<any[]> {
        return this.db.list('admissionExamsPerInstitution/'+ key)
            .do(data => console.log(data))
            .catch(this.handleError)
    }

    getAdmissionExam(key: string):  Observable<any[]>{
        return this.db.object('admissionExams/'+ key)
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    */

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}