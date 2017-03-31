import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions/question.service';
import { NavParams, App} from 'ionic-angular';
import { QuestionHandlerComponent } from '../questions/question-handler.component';


@Component({
    selector: 'ck-examAreas-list',
    templateUrl : 'examAreas-list.component.html',
    providers : [QuestionService]
})
export class ExamAreasList implements OnInit{

    areas: any[] = [];
    errorMessage: string;

    constructor(private _questionService : QuestionService, private navParams: NavParams, private appCtrl: App){};

    ngOnInit(): void{
        let key: string = this.navParams.get('examKey');
        this._questionService.getExamAreasPerExam(key)
            .subscribe(
            (items) => {
                    items.forEach((item) => {
                        let area = { name : item.areaName, questions : []};
                        this._questionService.getExamAreaQuestionsPerExamArea(item.$key)
                            .subscribe((questions) => { 
                                area.questions = questions;
                            });
                        this.areas.push(area);
                    });
                    console.log(this.areas);
            }
        );        
    }

    goToQuestion(key: string): void{
        let params: any = { questionKey: key };
        this.appCtrl.getRootNav().push(QuestionHandlerComponent, params);        
    }


}