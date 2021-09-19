import { ProductListComponent } from './../DemoInput-Output/ProductList.component';
import { PropModule } from './../Prop.module';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-viewchild',
    template: `
        <section class="container py-5">
            <h1 class="text-warning">CHAPTER5: PropModule - @ViewChild</h1>
            <!-- sectionI -->
            <section>
                <h2 class="text-success">I. @ViewChild: DOM đến Component hoặc thẻ html</h2>
                <h3>#01. DOM đến thẻ html theo mô hình MVVM</h3>
                <div class="form-group">
                    <p class="mb-3">UserName</p>
                    <input type="text" class="form-control mb-3" #usName >
                    <button class="btn btn-success" (click)="getUserName()">Get User</button>
                </div>
                <hr>
                <h3>#02. DOM đến component : Xóa phần danh sách sản phẩm ở I. thực hanh @input - @output</h3>
                <div class="form-group">
                    <button class="btn btn-danger mb-3" (click)="deleteComponent()">DELETE ProductListComponent</button>
                </div>
                <hr>
                <h3>#03. Thêm Sản Phẩm </h3>
                <form>
                    <div class="form-group">
                        <p class="mb-3">Tên Sản Phẩm</p>
                        <input type="text" class="form-control mb-3" name="tenSP"  [(ngModel)]="newProduct.tenSP">
                    </div>
                    <div class="form-group">
                        <p class="mb-3">Giá</p>
                        <input type="text" class="form-control mb-3" name="gia" [(ngModel)]="newProduct.gia" >
                    </div>
                    <div class="form-group">
                        <p class="mb-3">Nhà Sản Xuất</p>
                        <input type="text" class="form-control mb-3" name="nhaSX"  [(ngModel)]="newProduct.nhaSX">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" (click)="addProduct()">Add Product</button>
                    </div>
                </form>
                <!-- ==================================================== -->
                <app-productlist #tagProductList></app-productlist>
                <!-- ==================================================== -->
            </section>
    `
})

export class ViewChildComponent implements OnInit {
    @ViewChild('usName') tagInput!: ElementRef  // ElementRef là đối tượng html trong angular
    @ViewChild('tagProductList') tagProduct!: ProductListComponent

    newProduct:Product = {
        tenSP: "",
        gia: "",
        nhaSX: "",
        hinhAnh: "",
    }

    getUserName = () => {
        this.tagInput.nativeElement.value = "Elon Musk";
        this.tagInput.nativeElement.style.color = "red";
        alert(this.tagInput.nativeElement.value)
    }

    deleteComponent = () => {
        console.log(this.tagProduct)
        this.tagProduct.arrProduct = [];
    }

    addProduct = () => {
        let newProduct = {...this.newProduct, hinhAnh: "https://i.pravatar.cc?u="+this.newProduct.tenSP}

        // DOM đến component app-product-list thông qua viewChild
        this.tagProduct.arrProduct.push(this.newProduct)
        console.log(newProduct)
    }

    constructor() { }

    ngOnInit() { }
}

interface Product {
    tenSP: string
    gia: string
    nhaSX: string
    hinhAnh: string
}