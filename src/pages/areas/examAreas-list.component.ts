import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions/question.service';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'ck-examAreas-list',
    templateUrl : 'examAreas-list.component.html',
    providers : [QuestionService]
})
export class ExamAreasList implements OnInit{

    areas: any[] = [];
    errorMessage: string;

    constructor(private _questionService : QuestionService, private navParams: NavParams, public navCtrl: NavController){};

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

}