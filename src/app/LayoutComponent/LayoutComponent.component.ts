import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-component',
    template: `<section class="container py-5">
        <h1 class="text-warning">CHAPTER 1: Component</h1><hr>
        <app-layout-header></app-layout-header>
        <div class="body">
            <div class="sidebar">
                <app-layout-sidebar></app-layout-sidebar>
            </div>
            <div class="content">
                <app-layout-content></app-layout-content>
            </div>
        </div>
        <app-layout-footer></app-layout-footer>
    </section>`,
    styles: [`
        .body {
            display: flex;
            justify-content: space-between;
            align-item: center;
            color: #fff
        }
        .sidebar {
            width: 30%;
            height: 100px;
            background-color: rgba(37, 164, 164, 0.5);

            display: flex;
            justify-content: center;
            align-items: center
        }
        .content {
            width: 70%;
            height: 100px;
            background-color: rgba(174, 120, 44, 1);

            display: flex;
            justify-content: center;
            align-items: center;
        }
    `]
})

export class LayoutComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }
}