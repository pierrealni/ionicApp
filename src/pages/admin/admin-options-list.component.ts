import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';
import { CreateExamGroupComponent } from './create-examGroup.component';

@Component({
    selector: 'ck-admin-options-list',
    templateUrl : 'admin-options-list.component.html'
})
export class AdminOptionsListComponent implements OnInit{

    options: any[];//options: Array<{ title: string}>; //, component: any
    errorMessage: string;

    constructor(private appCtrl: App) {
        this.options = [
        { title: 'Crear Grupo de Examenes', component: CreateExamGroupComponent} ,
        { title: 'Crear Examen' },
        { title: 'Crear Pregunta' },
        { title: 'Asociar Pregunta' }
        ];
    }

    ngOnInit(): void{
        
    }
    openPage(page){           
        this.appCtrl.getRootNav().push(CreateExamGroupComponent);
    }
}