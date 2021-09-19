import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoComponentNgContent } from './DemoNgcontent.component';
import { DirectiveComponent } from './Direcrtive.component';
import { FormComponent } from './Form.component';
import { QuanLySanPhamComponent } from './QuanLySanPham.component';


@NgModule({
    declarations: [DirectiveComponent, DemoComponentNgContent, FormComponent, QuanLySanPhamComponent],
    imports: [CommonModule, FormsModule], // FromModule bắt buộc phải có để sử dụng ngModel và các tính năng khác
    exports: [DirectiveComponent],
})
export class DirectiveModule { }
