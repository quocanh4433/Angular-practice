import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quanlysanpham',
    template: `
        <div class="container">
            <div class="card">
                <div class="card-header bg-dark text-light">
                    Tên sản phẩm
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã sản phẩm</p>
                        <input class="form-control" type="text" [(ngModel)]="sanPham.maSP">
                    </div>
                    <div class="form-group">
                        <p>Tên sản phẩm</p>
                        <input class="form-control" type="text" [(ngModel)]="sanPham.tenSP">
                    </div>
                    <div class="form-group">
                        <p>Giá</p>
                        <input class="form-control" type="text" [(ngModel)]="sanPham.gia">
                    </div>
                    <div class="form-group">
                        <p>Hình ảnh</p>
                        <input class="form-control" type="text" [(ngModel)]="sanPham.hinhAnh">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" (click)="themSP()">Thêm sản phẩm</button>
                    </div>
                </div>
            </div>

            <div class="card mt-2">
                <div class="card-header">Danh sách sản phẩm</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr [ngClass]="{'bg-light text-dark':index%2 == 0}"  *ngFor="let sp of arrSanPham; let index = index">
                            <td>{{sp.maSP}}</td>
                            <td>{{sp.tenSP}}</td>
                            <td><img src="{{sp.hinhAnh}}" width="50" height="50" alt=""></td>
                            <td>{{sp.gia}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
})

export class QuanLySanPhamComponent implements OnInit {
    /**
     * Render sản phẩm ra giao diện
     * 
     * Hiển thị xen kẻ màu sắc các dòng sản phẩm
     * 
     * Xây dựng chứng năng thêm sản phẩm
     */

    sanPham:SanPham = {
        maSP: "",
        tenSP: "",
        gia: 0,
        hinhAnh: ""
    }

    arrSanPham:SanPham[] = [
        {maSP: "1" , tenSP: "Iphone12", gia: 1200, hinhAnh: "https://i.pravatar.cc?u=si"},
        {maSP: "2" , tenSP: "Iphone12S", gia: 2200, hinhAnh: "https://i.pravatar.cc?u=si"},
        {maSP: "3" , tenSP: "Iphone14", gia: 4200, hinhAnh: "https://i.pravatar.cc?u=si"},
    ];

    constructor() { }

    ngOnInit() { }

    themSP () {
        let sanPhamMoi = {...this.sanPham}
        this.arrSanPham.push(sanPhamMoi)
    }
}

interface SanPham {
    maSP:string;
    tenSP:string;
    gia:number;
    hinhAnh:string
}