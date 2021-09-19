import { Component, Input, OnInit, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card text-dark">
            <img [src]="productInput.hinhAnh" alt="..."/>
            <div class="card-body bg-warning">
                <p>Sản Phẩm: {{productInput.tenSP}}</p>
                <p>Giá: <strong>{{productInput.gia}}</strong></p>
                <p>Nhà Sản Xuất: {{productInput.nhaSX}}</p>
                <button class="btn btn-primary" (click)="viewDetail()">Xem Chi Tiết</button>
            </div>
        </div>
    `
})

export class ProductComponent implements OnInit {
    // Input nhận giá trị tham số tại nới sử dụng nó
    // Truyền từ component cha sang component con
    @Input() productInput!:Product  


    // Định nghĩa sự kiện eventViewDetail, giống như onCLick onChange onBlur trên thẻ html
    @Output() eventViewDetail = new EventEmitter()

    constructor() { }
    ngOnInit() { }

    viewDetail () {
        // Đưa dữ liệu ra component cha thông qua phương thức emit
        this.eventViewDetail.emit(this.productInput)

        // 01. Truyền nhiều tham số vào hàm emit
        let arrParam:[Product, boolean] = [this.productInput, true]
        let objectParam = {
            user: this.productInput,
            status: true
        }

        // 02. Sau đó đưa vào hàm emit()
        // this.eventViewDetail.emit(arrParam);
        // this.eventViewDetail.emit(objectParam);
    }

}

interface Product{
    tenSP:string
    gia:string
    nhaSX:string
    hinhAnh:string
}