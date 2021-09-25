import { ViewChildComponent } from '../../PropModule/DemoviewChild/DemoViewChild';
import { ProductListComponent } from '../../PropModule/DemoInput-Output/ProductList.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { AntDModule } from '../../_core/Shared/AntDModule/AntD.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/Home/Home.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule } from "@angular/router"
import { DetailComponent } from '../../pages/Detail/Detail.component';
import { DatabindingComponent } from 'src/app/Demo/DataBinding/DataBinding.component';
import { DirectiveComponent } from 'src/app/Demo/DirectiveModule/Direcrtive.component';
import { LayoutComponent } from 'src/app/Demo/LayoutComponent/LayoutComponent.component';
import { DirectiveUIComponent } from 'src/app/Demo/DirectiveUI/DirectiveUI.component';
import { DemoFormComponent } from 'src/app/Demo/Form/DemoForm.component';

// Định nghĩa trang mặc định hiển thị
const homeRoutes:Routes = [
    {path: "", component: HomeTemplateComponent, children: [
        {path: "", component: HomeComponent},
        {path: "home", component: HomeComponent},
        {path: "layout", component: LayoutComponent},
        {path: "databinding", component: DatabindingComponent},
        {path: "directive", component: DirectiveComponent},
        {path: "propmodule01", component: ProductListComponent},
        {path: "propmodule02", component: ViewChildComponent},
        {path: "directiveui", component: DirectiveUIComponent},
        {path: "demoform", component: DemoFormComponent},

        {path: "detail/:id", component: DetailComponent},
        {path: "detail", component: DetailComponent},
    ]},
]


@NgModule({
    imports: [CommonModule, FormsModule, AntDModule, RouterModule.forChild(homeRoutes)],
    exports: [],
    declarations: [HomeComponent , HomeTemplateComponent],
    providers: [],
})
export class HomeModule { }
