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

    individualExams: any[] = [];
    groupExams: any[] = [];
    errorMessage: string;

    constructor(private _admissionExamService : AdmissionExamService, public appCtrl: App, private navParams: NavParams){};

    ngOnInit(): void{
        let key: string = this.navParams.get('institutionKey');
        /*this._admissionExamService.getExamsPerInstitutionView(key)
        .subscribe(
			(admissionExams) => { this.admissionExams = admissionExams; },
		    error => this.errorMessage = <any>error
		);*/
        this._admissionExamService.getExamGroupsPerInstitution(key)
            .subscribe(
            (groups) => {
                    groups.forEach((group) => {
                        this._admissionExamService.getExamsPerGroup(group.$key)
                            .subscribe((exams) => { 
                                if(exams.length <= 1){
                                    this.individualExams.push(exams[0]);                    
                                }else{
                                    group.exams = exams;
                                    this.groupExams.push(group);
                                }
                            });
                    });
            }
        );
    }

    goToExamQuestions(key: string): void{
        let params: any = { admissionExamKey:  key };
        this.appCtrl.getRootNav().push(QuestionsHandlerComponent, params);
    }

}