import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './LayoutComponent.component';
import { LayoutContentComponent } from './LayoutContent.component';
import { LayoutFooterComponent } from './LayoutFooter.component';
import { LayoutHeaderComponent } from './LayoutHeader.component';
import { LayoutSidebarComponent } from './LayoutSidebar.component';


@NgModule({
    imports: [CommonModule],  //Nơi import các m odule khác cho ứng dụng
    exports: [LayoutComponent], //Kết quả cần xuất ra (component, module) của module này (để module khác import vào có thể sử dụng)
    declarations: [
        LayoutComponent, 
        LayoutHeaderComponent, 
        LayoutFooterComponent, 
        LayoutSidebarComponent, 
        LayoutContentComponent
    ], //Chứa các component thuộc module này
})
export class LayoutModule { }
