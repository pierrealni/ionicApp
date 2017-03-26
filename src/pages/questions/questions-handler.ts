import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
    selector: 'ck-questions-handler',
    templateUrl : 'questions-handler.html',
    providers : [QuestionService]
})
export class QuestionsHandlerComponent implements OnInit{

    questions: any[] = [];
    errorMessage: string;
    question: any;
    index: number = 0;

    constructor(private _questionService : QuestionService){};

    ngOnInit(): void{
        //get all the questions
        this._questionService.getQuestions()
        .subscribe(
			(questions) => { this.questions = questions; 
                this.question = questions[this.index]
            },
		    error => this.errorMessage = <any>error,
		);
        //set the first question
        
    }

    onConfirmClicked(index: string): void{
        console.log('the resolved index is '+ index);
        this.index++;
        this.question = this.questions[this.index];
        //get the next question
    }

}