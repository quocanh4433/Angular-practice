import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Direcrtive.component';


@NgModule({
    declarations: [DirectiveComponent],
    imports: [CommonModule, FormsModule], // FromModule bắt buộc phải có để sử dụng ngModel và các tính năng khác
    exports: [DirectiveComponent],
})
export class DirectiveModule { }
