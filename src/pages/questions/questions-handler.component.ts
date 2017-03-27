import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

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

    constructor(private _questionService : QuestionService){};

    ngOnInit(): void{
        //get all the questions and set the first one
        this._questionService.getQuestions()
        .subscribe(
			(questions) => { this.questions = questions; 
                this.question = questions[this.index]
            },
		    error => this.errorMessage = <any>error,
		);        
    }

    onConfirmClicked(index: string): void{
        //get the next question
        this.index++;
        this.question = this.questions[this.index];      
    }

}