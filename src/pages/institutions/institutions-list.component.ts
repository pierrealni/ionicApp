import { Component, OnInit } from '@angular/core';
import { InstitutionService } from './institution.service';

import { ExamsListComponent } from '../exams/exams-list.component'
import { App } from 'ionic-angular';

@Component({
    selector: 'ck-institutions',
    templateUrl : 'institutions-list.component.html',
    providers : [InstitutionService]
})
export class InstitutionsListComponent implements OnInit{

    institutions: any[];
    errorMessage: string;

    constructor(private _institutionService : InstitutionService, private appCtrl: App){};

    ngOnInit(): void{
        this._institutionService.getInstitutions()
        .subscribe(
			(institutions) => { 
                this.institutions = institutions; 
            },
		    error => this.errorMessage = <any>error
		);
    }

    goToExams(index: number): void{
        let params: any = { institutionKey:  this.institutions[index].$key, institutionName: this.institutions[index].name };
        this.appCtrl.getRootNav().push(ExamsListComponent, params);
    }
}