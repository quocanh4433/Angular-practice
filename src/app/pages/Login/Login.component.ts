import { USER_LOGIN, ACCESS_TOKEN } from './../../_core/Util/setting';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_core/Services/User.service';

@Component({
    selector: 'app-login',
    template: `
        <form #frmLogin="ngForm" (ngSubmit)="login(frmLogin.value)" class="container">
            <h3>Login</h3>
            <div class="form-group">
                <p>USERNAME</p>
                <input class="form-control" name="taiKhoan" ngModel />
            </div>
            <div class="form-group">
                <p>PASSWORD</p>
                <input class="form-control" name="matKhau" ngModel />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Login</button>
            </div>
        </form>
    `,
    styles: [`
        input.ng-invalid,select.ng-invalid {
            border-left:5px solid red;
        }
        input.ng-valid,select.ng-valid {
            border-left:5px solid green;
        }
    `]
})

export class LoginComponent implements OnInit {
    constructor(private usService: UserService) { }
    login(values: any) {
        
        //call api
        console.log(values)

        this.usService.dangNhap(values).subscribe(result => {
            console.log(result);
            alert('Thanh cong')
            //Đăng nhập thành công => lưu vào localstorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.content));
            localStorage.setItem(ACCESS_TOKEN, result.content.accessToken)

        }, error => {
            console.log({ error })
        })

    }

    ngOnInit() { }
}

interface User {
    email: string,
    name: string,
    school: string
}

interface School {
    id: string, name: string
}