
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from "@angular/router"
import { AdminTemplateComponent } from './AdminTemplate.component';
import { AddUserComponent } from '../../pages/AddUser/AddUser.component';
import { AntDModule } from '../../_core/Shared/AntDModule/AntD.module';
// Định nghĩa trang mặc định hiển thị
const adminRoutes:Routes = [
    {path: "", component: AdminTemplateComponent, children: [
        {path: "", component: AddUserComponent}
    ]},
]


@NgModule({
    imports: [CommonModule, FormsModule, AntDModule , RouterModule.forChild(adminRoutes)],
    exports: [],
    declarations: [AdminTemplateComponent, AddUserComponent],
    providers: [],
})
export class AdminModule { }
