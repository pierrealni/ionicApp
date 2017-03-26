import { Component, OnInit } from '@angular/core';
import { AdmissionExamService } from './admissionExam.service';

@Component({
    selector: 'ck-admission-exams',
    templateUrl : 'admissionExams-list.html',
    providers : [AdmissionExamService]
})
export class AdmissionExamsListComponent implements OnInit{

    admissionExams: any[];
    errorMessage: string;

    constructor(private _admissionExamService : AdmissionExamService){};

    ngOnInit(): void{
        this._admissionExamService.getAdmissionExams()
        .subscribe(
			(admissionExams) => { this.admissionExams = admissionExams; },
		    error => this.errorMessage = <any>error
		);
    }

}