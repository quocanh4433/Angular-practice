import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './DemoInput/Product.component';
import { ProductListComponent } from './DemoInput/ProductList.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ProductListComponent],
    declarations: [ProductListComponent, ProductComponent],
    providers: [],
})
export class PropModule { }
