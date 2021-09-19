import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    template: `<header>HEADER</header>`,
    styles: [`
        header {
            height: 70px;
            background-color: rgba(0,0,0,0.5);
            line-height: 70px;
            color: #fff;
            text-align: center
        }
    `]
})

export class LayoutHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}