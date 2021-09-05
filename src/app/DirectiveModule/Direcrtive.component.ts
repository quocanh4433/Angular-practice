import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `<section class="container py-5">
        <h1 class="text-warning">CHAPTER 2: Directive</h1><hr>

        <!-- SectionI -->
        <section class="sectionI">
            <h2 class="text-success">I. Structural Directive</h2>
            <!-- sectionI - 01 -->
            <section>
                <h3>#01. *ngIf - Kiểm tra điều kiện để thay đổi hiển thị trên giao diện</h3>
                <!-- sectionI - 01.1  -->
                <section>
                    <nav class="d-flex justify-content-between align-items-center alert alert-primary ">
                        <a  href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">CONTACT</a>
                        <a href="#">FAQ</a>
                        <a *ngIf="!isLogin" href="#" class="bg-primary text-light p-2 rounded" (click)="login()">CLICK HERE</a>
                        <a *ngIf="isLogin" href="#">HELLO {{userName}}</a>
                    </nav>
                </section>
                <hr>
                <!-- sectionI - 01.2  -->
                <section class="d-flex">
                    <div class="form-group">
                        <p>Nhập số</p>
                        <input class="form-control w-50" [(ngModel)]="number" />
                    </div>
                    <div class="alert alert-primary">
                        <h6>Kết Quả:</h6>
                        <a href="#" *ngIf="number % 2 == 0">Số chẵn</a>
                        <a href="#" *ngIf="number % 2 !== 0">Số lẻ</a>
                    </div>
                </section>
            </section>
            <hr>
            <!-- sectionI - 02 -->
            <section>
                <h3>02. *ngSwitchCase - Kiểm tra các trường hợp để hiển thị trên giao diện</h3>
                <div class="d-flex align-items-center">
                    <select class="form-control w-25 mr-3" [(ngModel)]="color">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </select>
                    <div [ngSwitch]="color">
                        <div style="background-color: red; width: 30px; height: 30px; border-radius: 100px" *ngSwitchCase="'red'"></div>
                        <div style="background-color: green; width: 30px; height: 30px; border-radius: 100px" *ngSwitchCase="'green'"></div>
                        <div style="background-color: blue; width: 30px; height: 30px; border-radius: 100px" *ngSwitchCase="'blue'"></div>
                    </div>
                </div>
            </section>
            <hr>
            <!-- sectionI - 03 -->
            <section>
                <h3>03. *ngFor - Thêm thuộc tính index</h3>
                <div class="row">
                    <div class="col-4" *ngFor="let user of arrUser; let index = index">
                        <div class="card rounded">
                            <img [src]="user.avatar" alt="..." />
                            <div class="card-body">
                                <p>ID: {{index + 1}}</p>
                                <p>UserName: {{user.userName}}</p>
                                <p>Password: {{user.password}}</p>
                                <p>Email: {{user.email}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        
    </section>
    `,
    styleUrls: ['./Directive.component.scss']
    // styles: ['h1 { font-weight: normal; }']
})

export class DirectiveComponent implements OnInit {
    arrUser:User[] = [
        {userName:'sideptrai',password:'12/12/2000',email:'si3d@gmail.com',avatar:'https://i.pravatar.cc?u=si'},
        {userName:'khai',password:'123456',email:'khai@gmail.com',avatar:'https://i.pravatar.cc?u=khai'},
        {userName:'luandeptrai',password:'21/12/2000',email:'luan3d@gmail.com',avatar:'https://i.pravatar.cc?u=luan'},
    ]
    color:string = "red";
    number:number = 5;
    userName:string = "Bootcamp08E";
    isLogin:boolean = false;

    login () {
        this.isLogin = true
    }

    constructor() { }

    ngOnInit() { }
}

interface User{
    userName:string
    password:string
    email:string
    avatar:string
}