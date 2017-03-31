import { Component, Input, HostBinding } from '@angular/core';

@Component({
    template: `
            <ion-navbar color='primary'>
                <ion-title>{{ title }}</ion-title>
                <button *ngIf='mainMenuAccess' ion-button menuToggle>
                    <ion-icon name="menu"></ion-icon>
                </button>
            </ion-navbar>
    `,
    selector: '[ck-header]'
})
export class HeaderComponent{
    @HostBinding('attr.data-mainManuAccess')
    @Input() title: string = 'Charku';
    

    @HostBinding('attr.data-mainManuAccess')
    @Input() mainMenuAccess: boolean = false;
}