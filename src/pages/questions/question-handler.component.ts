import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { NavParams, NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'ck-question-handler',
    templateUrl: 'question-handler.component.html',
    providers: [QuestionService]
})
export class QuestionHandlerComponent implements OnInit {

    errorMessage: string;
    question: any;
    questionCompleted: boolean = false;
    selectedOptionIsCorrect: boolean = undefined;

    constructor(private _questionService: QuestionService, private navParams: NavParams, public navCtrl: NavController, private alertCtrl: AlertController) { };

    ngOnInit(): void {
        let key: string = this.navParams.get('questionKey');
        this._questionService.getQuestion(key)
            .subscribe(
            (question) => {
                this.question = question;
            }
            );
    }

    onConfirmClicked(selectedOptionIsCorrect: boolean): void {
        let result = selectedOptionIsCorrect ? 'Correcta' : 'Incorrecta';
        let alert = this.alertCtrl.create({
            title: 'Resultado',
            subTitle: 'Respuesta ' + result,
            buttons: [{
                text: 'Regresar',
                handler: data => {
                    console.log('Regresar clicked');
                    this.navCtrl.pop();
                }
            }]
        });
        alert.present();
    }

    goBack() {
        this.navCtrl.pop();
        //this.navCtrl.popToRoot();
    }

}