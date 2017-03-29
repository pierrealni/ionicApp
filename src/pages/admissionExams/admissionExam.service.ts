import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2";
import { Response } from '@angular/http';

@Injectable()
export class AdmissionExamService {
    constructor(private db: AngularFireDatabase) { }

    /*getExamsPerInstitutionView(key: string): any[] {
        this.getExamGroupsPerInstitution(key)
            .subscribe(
            (groups) => {
                    groups.forEach((group) => {
                        this.getExamsPerGroup(group.$key)
                            .subscribe((exams) => { 
                                group.exams = exams
                            });
                    });
                    return groups;
            }
        );
    }*/

    getExamsPerGroup(key: string): Observable<any[]> {
        return this.db.list('exams',
            {
                query: { orderByChild: 'examGroupId', equalTo: key }
            })
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getExamGroupsPerInstitution(key: string): Observable<any[]> {
        return this.db.list('examGroups',
            {
                query: { orderByChild: 'institutionId', equalTo: key }
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