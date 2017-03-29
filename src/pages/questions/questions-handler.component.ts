import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'ck-questions-handler',
    templateUrl : 'questions-handler.component.html',
    providers : [QuestionService]
})
export class QuestionsHandlerComponent implements OnInit{

    questions: any[] = [];
    errorMessage: string;
    question: any;
    index: number = 0;
    totalGrade: number =0;
    questionsCompleted: boolean = false;

    constructor(private _questionService : QuestionService, private navParams: NavParams, public navCtrl: NavController){};

    ngOnInit(): void{
        //get all the questions and set the first one
        let key: string = this.navParams.get('admissionExamKey');
        this._questionService.getQuestionsPerAdmissionExam(key)
        .subscribe(
			(questions) => { this.questions = questions; 
                this.question = questions[this.index]
            },
		    error => this.errorMessage = <any>error,
		);        
    }

    onConfirmClicked(selectedOptionIsCorrect: boolean): void{
        this.totalGrade += (selectedOptionIsCorrect? this.question.grade : 0);
        //get the next question
        if(this.index === (this.questions.length - 1)){
            this.questionsCompleted = true;
        }else{
            this.index++;
            this.question = this.questions[this.index];
        }        
    }

    goToAdmissionExams(){
        this.navCtrl.popToRoot();
    }

}