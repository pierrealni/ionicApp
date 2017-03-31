import { Component, OnInit } from '@angular/core';
import { ExamService } from './exam.service';

import { App } from 'ionic-angular';
import { QuestionsHandlerComponent } from '../questions/questions-handler.component';
import { ExamAreasList } from '../areas/examAreas-list.component';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'ck-exams',
    templateUrl : 'exams-list.component.html',
    providers : [ExamService]
})
export class ExamsListComponent implements OnInit{

    individualExams: any[] = [];
    groupExams: any[] = [];
    errorMessage: string;
    institutionName: string;

    constructor(private _examService : ExamService, public appCtrl: App, private navParams: NavParams){};

    ngOnInit(): void{
        let key: string = this.navParams.get('institutionKey');
        this.institutionName =  this.navParams.get('institutionName');
        this._examService.getExamGroupsPerInstitution(key)
            .subscribe(
            (groups) => {
                    groups.forEach((group) => {
                        this._examService.getExamsPerGroup(group.$key)
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
        let params: any = { examKey:  key };
        //this.appCtrl.getRootNav().push(QuestionsHandlerComponent, params);
        this.appCtrl.getRootNav().push(ExamAreasList, params);
    }

}