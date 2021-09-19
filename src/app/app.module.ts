import { HomeModule } from './Templates/HomeTemplate/Home.module';
import { AdminModule } from './Templates/AdminTemplate/Admin.module';
import { UserModule } from './Templates/Usertemplate/User.module';

import { RegisterComponent } from './pages/Register/Register.component';
import { LoginComponent } from './pages/Login/Login.component';
import { HomeComponent } from './pages/Home/Home.component';
import { PropModule } from './PropModule/Prop.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataBindingModule } from './Demo/DataBinding/DataBinding.module';
import { DirectiveModule } from './Demo/DirectiveModule/Directive.module';
import { LayoutModule } from './Demo/LayoutComponent/LayoutComponent.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectiveUIModule } from './Demo/DirectiveUI/DirecttiveUI.module';

//Khai báo routing
import { Routes, RouterModule } from "@angular/router"

let appRoutes: Routes = [
  {path: "home", loadChildren: () => HomeModule},
  {path: "", loadChildren: () => HomeModule},
  {path: "user", loadChildren: () => UserModule},
  {path: "admin", loadChildren: () => AdminModule},

  // {path: "home", component: HomeComponent},
  // {path: "login", component: LoginComponent},
  // {path: "register", component: RegisterComponent},
  // {path: "**", redirectTo: ""},
]

registerLocaleData(en);

@NgModule({
  declarations: [ // Nới chứ Component (Mỗi component sinh ra phải có module chứa nó)
    AppComponent,
  ],
  imports: [ // Nới import module khác của ứng dụng
    BrowserModule,
    DataBindingModule,
    DirectiveModule,
    LayoutModule,
    PropModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DirectiveUIModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule, // Module giúp gọi API
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], // Nới khai báo có sẻvice
  bootstrap: [AppComponent] // Nới khai báo chạy trên index component <app-root></app-rooot>
})
export class AppModule { }
