import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
    <section class="container py-5">
        <h1 class="text-warning">CHAPTER 3: Directive - tương tự như ptopery trên thẻ HTML</h1><hr>
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
                <h3>#02. *ngSwitchCase - Kiểm tra các trường hợp để hiển thị trên giao diện</h3>
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
                <h3>#03. *ngFor - Thêm thuộc tính index</h3>
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
            <hr>
            <!-- sectionI - 04-->
            <section>
                <h3>#04. *ngContent - chèn nội dung vào giữa 2 thẻ component</h3>
                <app-demo-ngcontent>
                    <a class="sign">Content được chèn vào</a>
                    <img class="logo rounded-circle" src="https://picsum.photos/50/50" alt="">
                </app-demo-ngcontent>
            </section>
            <hr>
            <!-- sectionI - 05-->
            <section>
                <h3>#05. *ngClass - kiểm tra điều kiện để chèn class</h3>
                <h4 class="ml-4">## Eg01: thay đổi màu chữ và fontsize theo điều kiện</h4>
                <p class="mb-4" [ngClass]="{'mauChu': mauChu, 'fontChu': fontChu}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam!</p>
                <h4 class="ml-4">## Eg02: thay đổi background-color theo hàng chẵn</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr [ngClass]="{'alert alert-warning' : index%2 == 0}" *ngFor="let user of arrUser; let index = index">
                            <td><img src="{{user.avatar}}" width="50" height="50" class="rounded-circle" alt="..."></td>
                            <td>{{user.userName}}</td>
                            <td>{{user.password}}</td>
                            <td>{{user.email}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <!-- sectionI - 06-->
            <section>
                <h3>#06. *ngStyle - can thiệp đến property style trên thẻ HTML</h3>
                <h4 class="ml-4">## Eg01: thay đổi backgroung-image theo điều kiện</h4>
                <p [ngStyle]="{'background-image': backgroundImage}" class="bg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum amet et magni minus nihil aut facere magnam, aliquam consectetur eum.</p>
                <h4 class="ml-4 mt-4">## Eg02: thay đổi fontsize khi click vào button</h4>
                <div class="text-primary"[ngStyle]="{'font-size': fontSize+'px'}" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum amet et magni minus nihil aut facere magnam, aliquam consectetur eum.</div>
                <div class="form-group">
                    <button class="btn btn-success " (click)="changeFontSize(true)">+</button>
                    <button class="btn btn-warning ml-2" (click)="changeFontSize(false)">-</button>
                </div>
            </section>
        </section>
        <hr>
        <!-- sectionII - Thực hành -->
        <section>
            <h2 class="text-success">II. Thực hành</h2>
            <!-- sectionII - 01 -->
            <section>
                <h3>#01. Lấy thông tin từ form đăng nhập và thay đổi trên giao diện</h3>
                <app-form></app-form>
            </section>
            <!-- sectionII - 02 -->
            <section>
                <h3>#02. Quản lý sản phẩm</h3>
                <app-quanlysanpham></app-quanlysanpham>
            </section>
        </section>
    </section>
    `,
    styleUrls: ['./Directive.component.scss']
    // styles: ['h1 { font-weight: normal; }']
})

export class DirectiveComponent implements OnInit {
    arrUser: User[] = [
        { userName: 'sideptrai', password: '12/12/2000', email: 'si3d@gmail.com', avatar: 'https://i.pravatar.cc?u=si' },
        { userName: 'khai', password: '123456', email: 'khai@gmail.com', avatar: 'https://i.pravatar.cc?u=khai' },
        { userName: 'luandeptrai', password: '21/12/2000', email: 'luan3d@gmail.com', avatar: 'https://i.pravatar.cc?u=luan' },
    ]
    color: string = "red";
    number: number = 5;
    userName: string = "Bootcamp08E";
    isLogin: boolean = false;

    mauChu: boolean = true;
    fontChu: boolean = true;

    backgroundImage: string = 'url("https://picsum.photos/1000/1000")';

    fontSize:number = 24;

    login() {
        this.isLogin = true
    }

    changeFontSize (tangGiam:boolean) {
        if(tangGiam) {
            this.fontSize +=  2
        } else {
            this.fontSize -= 2
        }
    }
    constructor() { }

    ngOnInit() { }
}

interface User {
    userName: string
    password: string
    email: string
    avatar: string
}