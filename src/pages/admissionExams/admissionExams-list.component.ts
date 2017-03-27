import { Component, OnInit } from '@angular/core';
import { AdmissionExamService } from './admissionExam.service';

import { App } from 'ionic-angular';
import { QuestionsHandlerComponent } from '../questions/questions-handler.component'

@Component({
    selector: 'ck-admission-exams',
    templateUrl : 'admissionExams-list.component.html',
    providers : [AdmissionExamService]
})
export class AdmissionExamsListComponent implements OnInit{

    admissionExams: any[];
    errorMessage: string;

    constructor(private _admissionExamService : AdmissionExamService, public appCtrl: App){};

    ngOnInit(): void{
        this._admissionExamService.getAdmissionExams()
        .subscribe(
			(admissionExams) => { this.admissionExams = admissionExams; },
		    error => this.errorMessage = <any>error
		);
    }

    goToAdmissionExamQuestions(): void{
        this.appCtrl.getRootNav().push(QuestionsHandlerComponent);
    }

}