import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    template: `
    
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <a class="navbar-brand" href="#">CYBERSOFT</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active" *ngIf="!isLogin">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" *ngIf="isLogin">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                </ul>
                <p class="form-inline my-2 my-lg-0 text-light" *ngIf="!isLogin">
                    <span class="pr-3 mr-3 border-right border-right border-light">Sign in</span>
                    <span>Sign up</span>                        
                </p>
                <p class="form-inline my-2 my-lg-0 text-light" *ngIf="isLogin">
                    <span class="pr-3 mr-3 border-right border-right border-light">{{this.userLogin.userName}}</span>
                    <span>{{this.userLogin.email}}</span>                        
                </p>
            </div>
        </nav>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning btn-lg mt-3 text-light" data-toggle="modal" data-target="#modelId">Sign in</button>
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Sign In</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <p>Tài khoản</p>
                            <input type="text" class="form-control" #user>
                        </div>
                        <div class="form-group">
                            <p>Email</p>
                            <input type="text" class="form-control" #email>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="btnClose" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" (click)="login(user.value, email.value)">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class FormComponent implements OnInit {
    isLogin:boolean = true;
    userLogin = {userName: "", email: ""}

    constructor() { }
    ngOnInit() { 
        // giống Didmount
        if(localStorage.getItem("userName")){
            this.userLogin.userName = localStorage.getItem("userName")!;
            this.isLogin = true
        }
    }

    login (username:string, email:string) {
        this.userLogin.userName = username;
        this.userLogin.email = email;

        const USER_TEST:string = "Cybersoft"
        if (username == USER_TEST) {
            this.isLogin = true;
            localStorage.setItem('userName', this.userLogin.userName)

            let btnClose:any = document.querySelector("#btnClose")
            btnClose.click()
        } else {
            alert("Tài khoản không đúng")
        }
    }
}