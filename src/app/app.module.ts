import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';
import { LayoutModule } from './LayoutComponent/LayoutComponent.module';

@NgModule({
  declarations: [ // Nới chứ Component (Mỗi component sinh ra phải có module chứa nó)
    AppComponent,
  ],
  imports: [ // Nới import module khác của ứng dụng
    BrowserModule,
    DataBindingModule,
    DirectiveModule,
    LayoutModule
  ],
  providers: [], // Nới khai báo có sẻvice
  bootstrap: [AppComponent] // Nới khai báo chạy trên index component <app-root></app-rooot>
})
export class AppModule { }
