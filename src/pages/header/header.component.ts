import { Component } from '@angular/core';

@Component({
    template : `
            <ion-navbar color='primary'>
                <ion-title>{{ title }}</ion-title>
            </ion-navbar>
    `,
    selector: '[ck-header]'
})
export class HeaderComponent {
    title: string = 'Charku';
}