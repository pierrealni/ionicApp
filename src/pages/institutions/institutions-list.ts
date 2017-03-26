import { Component, OnInit } from '@angular/core';
import { InstitutionService } from './institution.service';

@Component({
    selector: 'ck-institutions',
    templateUrl : 'institutions-list.html',
    providers : [InstitutionService]
})
export class InstitutionsListComponent implements OnInit{

    institutions: any[];
    errorMessage: string;

    constructor(private _institutionService : InstitutionService){};

    ngOnInit(): void{
        this._institutionService.getInstitutions()
        .subscribe(
			(institutions) => { this.institutions = institutions; },
		    error => this.errorMessage = <any>error
		);
    }

    selectInstitution(index : number): void{
        //TO DO : CALL TO INSTITUTION VIEW
    }
}