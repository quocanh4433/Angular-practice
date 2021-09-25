import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoFormComponent } from './DemoForm.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DemoFormComponent],
    declarations: [DemoFormComponent],
    providers: [],
})
export class DemoFormModule { }
