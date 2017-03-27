import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
    selector: 'ck-question',
    templateUrl : 'question.html',
    providers : [QuestionService]
})
export class QuestionComponent {

    @Input() question: any;
    @Output() confirmClicked: EventEmitter<string> = new EventEmitter<string>();

    //constructor(private _questionService : QuestionService){};

    onConfirm(): void{
        console.log('from question.ts');
        this.confirmClicked.emit(`${this.question.index}`);
    }

}