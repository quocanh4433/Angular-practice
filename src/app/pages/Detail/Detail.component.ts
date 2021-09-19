import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/_core/Services/Films.service';
@Component({
    selector: 'app-detail',
    template: `
        <div class="container">
            <h1>mã phim: {{maPhim}}</h1> 
            <h1>Tên Phim: {{filmDetail.tenPhim}}</h1>
            <h1>Mô tả: {{filmDetail.moTa}}</h1>
            <div>
                <img src="{{filmDetail.hinhAnh}}" />

            </div>
        </div>
    `
})

export class DetailComponent implements OnInit {
    maPhim:number = 0;
    filmDetail:any = {}


    //ActivatedRoute dùng để lấy param từ url
    constructor(private avtRoute:ActivatedRoute,private filmService:FilmsService, private title: Title) { }


    ngOnInit() { 

        // Nhận về mã phim         
        this.avtRoute.params.subscribe((params)=>{
            this.maPhim = params.id;
            //Sau khi lấy tham số từ url => gọi service
            this.layThongTinPhim(this.maPhim);
        })

        // Nhận về nhiều tham sô
        // this.avtRoute.queryParams.subscribe((params)=>{
        //     this.layThongTinPhim(params.maPhim);
        //     this.title.setTitle(params.tenPhim);
        // })

    }

    layThongTinPhim (maPhim:number) {
        this.filmService.getFilmDetail(maPhim).subscribe((result)=>{
            this.filmDetail = result.content;
            console.log('Result',result)
        },(error)=>{
            console.log({error})
        })
    }
}