import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveUIComponent } from './DirectiveUI.component';
import { AntDModule } from 'src/app/_core/Shared/AntDModule/AntD.module';
import { MaterialModule } from 'src/app/_core/Shared/MaterialUI/MaterialUI.module';

@NgModule({
    imports: [CommonModule, FormsModule, AntDModule, MaterialModule],
    exports: [DirectiveUIComponent],
    declarations: [DirectiveUIComponent],
    providers: [],
})
export class DirectiveUIModule { }
