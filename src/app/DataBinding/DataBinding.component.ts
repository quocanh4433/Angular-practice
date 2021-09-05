import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template: `<section class="container py-5">
        <h1 class="text-warning">CHAPTER 1: DATABINDING</h1><hr>
        <!-- SectionI -->
        <section class="sectionI mb-5">
            <h2 class="text-success">I. Onway binding</h2>
            <!-- sectionI - 01  -->
            <section>
                <h3>#01. Interpolation (binding từ models thông qua cặp dâu ngoặc nhọn)</h3>
                <p>Dữ liệu được Binding: {{title}}</p>
                <input class="form-control w-25" value={{title}}>
            </section>
            <hr>
            <!-- sectionI - 02  -->
            <section>
                <h3>#02. Property Binding (binding vaof thuộc tính của thẻ thông qua [ ] - thường dùng cho thẻ input)</h3>
                <p [innerHTML]="'Dữ liệu được Biding:' + '' + title"></p>
                <input class="form-control w-25" [value]="title">
            </section>
            <hr>
            <!-- sectionI - 03  -->
            <section>
                <h3>#03. Event Binding</h3>
                <h5>Nhập thông tin DataBinding muốn thay đổi</h5>
                <div class="d-flex mb-4">
                    <input class="form-control w-25" #tagInput>
                    <button class="btn btn-success ml-2" (click)="changeTitle(tagInput.value)">Change</button>
                </div>
            </section>
            <hr>
            <!-- sectionI - notice -->
            <section>
                <div class="alert alert-danger p-3 rounded mb-3">
                    <h5 class="">#Lưu ý</h5>
                    <p>Trong thẻ input có  #tagInput  gọi là template variable </p>
                </div>
                <div class="alert alert-danger p-3 rounded">
                    <h5>#Nên sử dụng binding dữ liệu theo kiểu nào?</h5>
                    <ul>
                        <li>Sử dụng loại 01 cho nội dung trong thẻ</li>
                        <li>Sử dụng loại 02 khi muốn binding trên thuộc tính của thẻ - thường dùng cho thẻ input</li>
                    </ul>
                </div>
            </section>
        </section>
        <!-- SectionII -->
        <section class="sectionII">
            <h2 class="text-success">II. TwoWay binding</h2>
            <!-- sectionII - 01 -->
            <section>
                <h3>#01. *ngModel</h3>
                <input  class="form-control w-25" [(ngModel)]="title">
                <div class="alert alert-danger p-3 rounded mt-3">
                    <h5>#Lưu ý</h5>
                    <p>Khi thay đổi value trên input thì value sẽ ánh xạ ngược lại biến đó và tự thay đổi</p>
                </div>
            </section>
            <hr>
            <!-- sectionII - 02 -->
            <section>
                <h3>#02. *ngFor</h3>
                <table class="table">
                    <thead class="alert alert-secondary">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let product of arrProduct"> 
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td><img [src]="product.img" width="50px" height="50px" [alt]="product.name"></td>
                            <td>{{product.price}}</td>
                            <td><input [(ngModel)]="product.quantity"></td>
                            <td>{{product.price * product.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    </section>`,
    styleUrls: ['./DataBinding.component.scss']
})

export class DatabindingComponent implements OnInit {
    // Dữ liệu muốn hiển thị trên giao diện phai là thuộc tính của compoent
    title: string = "Bootcamp08E"
    arrProduct: Product[] = [
        { id: "1", name: "iPhone", price: 1200, quantity: 10, img: "https://picsum.photos/id/1/200/200" },
        { id: "2", name: "iPhoneX", price: 1400, quantity: 20, img: "https://picsum.photos/id/2/200/200" },
        { id: "3", name: "iPhoneXR", price: 900, quantity: 30, img: "https://picsum.photos/id/3/200/200" },
    ]

    changeTitle(newTitle: string) {
        this.title = newTitle
    }

    constructor() { }
    ngOnInit() { }
}

interface Product {
    id: string,
    name: string,
    price: number,
    img: string
    quantity: number
}