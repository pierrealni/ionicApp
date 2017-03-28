import { Component, OnInit } from '@angular/core';
import { AdmissionExamService } from './admissionExam.service';

import { App } from 'ionic-angular';
import { QuestionsHandlerComponent } from '../questions/questions-handler.component';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'ck-admission-exams',
    templateUrl : 'admissionExams-list.component.html',
    providers : [AdmissionExamService]
})
export class AdmissionExamsListComponent implements OnInit{

    admissionExams: any[];
    errorMessage: string;

    constructor(private _admissionExamService : AdmissionExamService, public appCtrl: App, private navParams: NavParams){};

    ngOnInit(): void{
        let key: string = this.navParams.get('institutionKey');
        this._admissionExamService.getAdmissionExamsPerInstitution(key)
        .subscribe(
			(admissionExams) => { this.admissionExams = admissionExams; },
		    error => this.errorMessage = <any>error
		);
    }

    goToAdmissionExamQuestions(key: string): void{
        let params: any = { admissionExamKey:  key };
        this.appCtrl.getRootNav().push(QuestionsHandlerComponent, params);
    }

}