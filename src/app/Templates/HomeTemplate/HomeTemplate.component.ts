import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometemplate',
    template: `
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <a class="navbar-brand" routerLink="#">Angular Routing</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" [routerLink]="['/home']">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/layout">01. Layout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/databinding">02. DataBinding</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/directive">03. Directive</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/propmodule01">04. PropsComponent</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/propmodule02">05. PropsComponent(tt)</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/directiveui">06. DirectiveUI</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/user/register">Register-Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/user/login">Login-Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/admin">Admin-Page</a>
                    </li>
                </ul>
            </div>
        </nav>        
        <!-- =================================== -->
        <router-outlet></router-outlet>
        <!-- =================================== -->    
    `
})

export class HomeTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}