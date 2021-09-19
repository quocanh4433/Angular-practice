import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './DemoInput-Output/Product.component';
import { ProductListComponent } from './DemoInput-Output/ProductList.component';
import { ViewChildComponent } from './DemoviewChild/DemoViewChild';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ProductListComponent, ViewChildComponent],
    declarations: [ProductListComponent, ProductComponent, ViewChildComponent],
    providers: [],
})
export class PropModule { }
