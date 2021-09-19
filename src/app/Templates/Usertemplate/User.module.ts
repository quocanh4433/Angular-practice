import { RegisterComponent } from '../../pages/Register/Register.component';
import { LoginComponent } from '../../pages/Login/Login.component';
import { AntDModule } from '../../_core/Shared/AntDModule/AntD.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from "@angular/router"
import { UserTemplateCompnent } from './UserTemplate.component';
// Định nghĩa trang mặc định hiển thị
const userRoutes:Routes = [
    {path: "", component: UserTemplateCompnent, children: [
        {path: "", component: LoginComponent},
        {path: "login", component: LoginComponent},
        {path: "register", component: RegisterComponent},
    ]},
]


@NgModule({
    imports: [CommonModule, FormsModule, AntDModule, RouterModule.forChild(userRoutes)],
    exports: [],
    declarations: [LoginComponent, RegisterComponent, UserTemplateCompnent],
    providers: [],
})
export class UserModule { }
