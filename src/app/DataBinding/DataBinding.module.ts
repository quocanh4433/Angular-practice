import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './DataBinding.component';

@NgModule({
    declarations: [DatabindingComponent],
    imports: [CommonModule, FormsModule],
    exports: [DatabindingComponent],
    providers: [],
})
export class DataBindingModule { }
