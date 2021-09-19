import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-ngcontent',
    template: `
        <nav class="nav alert alert-dark align-items-center p-2">
            <ng-content select=".logo"></ng-content>
            <a class="nav-link active" href="#">Active link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled link</a>
            <ng-content select=".sign"></ng-content>
        </nav>
    `
})

export class DemoComponentNgContent implements OnInit {
    constructor() { }

    ngOnInit() { }
}