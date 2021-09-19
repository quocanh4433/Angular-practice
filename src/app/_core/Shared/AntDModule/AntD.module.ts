import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [NzButtonModule, NzRateModule, NzTableModule, NzAlertModule, NzBreadCrumbModule, NzLayoutModule, NzIconModule],
    exports: [NzButtonModule, NzRateModule, NzTableModule, NzAlertModule, NzBreadCrumbModule, NzLayoutModule, NzIconModule],
})
export class AntDModule { }
