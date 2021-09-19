import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-footer',
    template: `<footer>FOOTER</footer>`,
    styles: [`
        footer {
            height: 70px;
            background-color: rgba(168, 79, 164, 0.5);
            line-height: 70px;
            color: #fff;
            text-align: center
        }
    `]
})

export class LayoutFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}