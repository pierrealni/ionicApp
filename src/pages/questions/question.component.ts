import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
    selector: 'ck-question',
    templateUrl : 'question.component.html',
    providers : [QuestionService]
})
export class QuestionComponent {

    @Input() question: any;
    @Output() confirmClicked: EventEmitter<string> = new EventEmitter<string>();
    selectedOptionIndex: any = undefined;

    onConfirm(): void{
        let result = (this.selectedOptionIndex !== undefined? this.question.options[this.selectedOptionIndex].isCorrect : false); 
        this.confirmClicked.emit(result);
    }

}