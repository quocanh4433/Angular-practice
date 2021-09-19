import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductComponent } from './Product.component';

@Component({
    selector: 'app-productlist',
    template: `
        <section class="container py-5">
            <h1 class="text-warning">CHAPTER 4: PropsModule - @Input & @Output</h1><hr>
            <!-- sectionI -->
            <section>
            <h2 class="text-success">I. Thực hành - input & output</h2>
                <div class="row">
                    <div class="col-4" *ngFor="let product of arrProduct">

                        <!-- =================================================== -->
                        <app-product (eventViewDetail)="viewDetailParent($event)" [productInput]="product"></app-product>
                        <!-- =================================================== -->
                        <hr>
                    </div>
                    <div class="form-group">
                        <p>Thay đổi giá tất cả sẩn phẩm bên trên</p>
                        <input class="form-control" type="text" #price>
                        <button class="btn btn-primary mt-2" (click)="changePrice(price.value)">Change Price</button>
                    </div>

                </div>
                <div>
                    <h2>Thông tin chi tiết</h2>
                    <div>
                        <div class="row">
                            <div class="col-4">
                                <img [src]="productDetail.hinhAnh" width="200" height="300" alt="">
                            </div>
                            <div class="col-8">
                                <h3>Thông tin tài khoản</h3>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>TênSP: </th>
                                            <th>{{productDetail.tenSP}}</th>
                                        </tr>
                                        <tr>
                                            <th>Giá: </th>
                                            <th>{{productDetail.gia}}</th>
                                        </tr>
                                        <tr>
                                            <th>Nhà Sản xuất: </th>
                                            <th>{{productDetail.nhaSX}}</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- sectionII -->
            <section>
                <h2 class="text-success">II. Lý thuyết @input - @output</h2>
                <h3>#01. @input: truyền từ component CHA sang component CON</h3>
                <h3>#02. @output: truyền từ component CON sang component CHA</h3>
                <div class="alert alert-danger p-3 rounded mb-3">
                    <h5 class="">#Lưu ý</h5>
                    <p>##React</p>
                    <ul>
                        <li>Muốn bắt một event cụ thể là onclick ở component con thì truyền cho component cha 1 prop mang sự kiên onclick, sau đó, nhận prop đó ở component con</li>
                        <li>Con muốn thay đổi thì phải hỏi cha</li>
                    </ul>
                    <p>##Angular</p>
                    <ul>
                        <li>Muốn bắt một event cụ thể là onclick ở component con thì truyền từ component con ra Component cha thông qua @output</li>
                        <li>Con đặt đâu cha mẹ ngồi đó</li>
                    </ul>
                </div>
                <div class="alert alert-danger p-3 rounded mb-3">
                    <h5 class="">#Lưu ý</h5>
                    <p>@import Eventemitter đúng là từ</p>
                    <ul>
                        <li>ĐÚNG: @angular/core</li>
                        <li>SAI: stream</li>
                    </ul>
                </div>
                <div class="alert alert-danger p-3 rounded mb-3">
                    <h5 class="">#Lưu ý</h5>
                    <ul>
                        <li>Để nhận giá trị truyền ra từ component con sử dụng $event</li>
                        <li>Phải sử dụng đúng $event mới nhận được giá trị</li>
                    </ul>
                    <p></p>
                </div>
            </section>
        </section>
    `
})

export class ProductListComponent implements OnInit {
    @ViewChildren(ProductComponent) lstTagProduct!:QueryList<ProductComponent>;

    arrProduct: Product[] = [
        { tenSP: 'Iphone10', gia: '1200', nhaSX: 'Apple', hinhAnh: 'https://i.pravatar.cc?u=si' },
        { tenSP: 'Galaxy S20', gia: '1400', nhaSX: 'Samsung', hinhAnh: 'https://i.pravatar.cc?u=khai' },
        { tenSP: 'Mate Pro 4', gia: '1500', nhaSX: 'Huawei', hinhAnh: 'https://i.pravatar.cc?u=luan' },
    ]

    productDetail: Product = this.arrProduct[0]

    viewDetailParent = (product: Product) => {
        this.productDetail = product
    }

    changePrice(newPrice: string) {
        this.lstTagProduct.forEach((tagProduct:ProductComponent, index:number) => {
            tagProduct.productInput.gia = newPrice
        })
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