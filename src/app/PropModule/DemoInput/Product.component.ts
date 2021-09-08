import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card text-dark">
            <img [src]="userInput.avatar" alt="..."/>
            <div class="card-body bg-warning">
                <p>UserName: {{userInput.userName}}</p>
                <p>Email: {{userInput.email}}</p>
                <p>Password: {{userInput.password}}</p>
            </div>
        </div>
    `
})

export class ProductComponent implements OnInit {
    // Input nhận giá trị tham số tại nới sử dụng nó
    @Input() userInput!:User   
    constructor() { }
    ngOnInit() { }
}

interface User{
    userName:string
    password:string
    email:string
    avatar:string
}