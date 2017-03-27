import { Component, OnInit } from '@angular/core';
import { InstitutionService } from './institution.service';

import { AdmissionExamsListComponent } from '../admissionExams/admissionExams-list.component'
import { App } from 'ionic-angular';

@Component({
    selector: 'ck-institutions',
    templateUrl : 'institutions-list.component.html',
    providers : [InstitutionService]
})
export class InstitutionsListComponent implements OnInit{

    institutions: any[];
    errorMessage: string;

    constructor(private _institutionService : InstitutionService, public appCtrl: App){};

    ngOnInit(): void{
        this._institutionService.getInstitutions()
        .subscribe(
			(institutions) => { 
                this.institutions = institutions; 
            },
		    error => this.errorMessage = <any>error
		);
    }

    goToInstitutionAdmissionExams(): void{
        this.appCtrl.getRootNav().push(AdmissionExamsListComponent);
    }
}