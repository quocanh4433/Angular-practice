import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/_core/Models/Film';
import { FilmsService } from 'src/app/_core/Services/Films.service';

@Component({
    selector: 'app-home',
    template: `
        <div class="container py-5">
            <h1 class="text-warning">DANH SÁCH PHIM</h1><hr>
            <div class="row">
                <div class="col-4" *ngFor="let film of films">
                    <div class="card">
                        <img [src]="film.hinhAnh"  alt="..."/>
                        <div class="card-body">
                            <h3 class="my-2 font-weight-bold text-info">{{film.tenPhim}}</h3>
                            <p class="my-2">{{film.moTa}}</p>

                            <div>
                                <!-- Lấy mã phim  -->
                                <a class="btn btn-success" routerLink="/detail/{{film.maPhim}}">Lấy Mã Phim</a>
                            </div>

                            <div class="my-2">
                                <!-- Lấy mã phim đê nhận về thôg tin phim  -->
                                <a class="btn btn-primary" [routerLink]="['/detail',film.maPhim]">Lấy Mã PHim Bằng Attibute</a>
                            </div>

                            <div>
                                <!-- Truyền vào dữ liệu  -->
                                <a class="btn btn-danger" [routerLink]="['/detail']"  [queryParams]="{maPhim:film.maPhim,tenPhim:film.tenPhim}">Lấy Nhiều Thông Tin Phim</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class HomeComponent implements OnInit {

    films:Film[] = []

    //DI: Dependency injection 
    constructor(private filmService: FilmsService) { }

    //ngOninit là 1 lifecycle giống component didmount
    ngOnInit() {
        this.filmService.getFilms().subscribe((result) => {
            console.log('result', result)
            // Sau khi lấy được API thì gán vào mảng films để binding dữ liệu lên giao diện
            this.films = result.content;
        }, (errors) => {
            console.log('errors', { errors })
        })
    }
}