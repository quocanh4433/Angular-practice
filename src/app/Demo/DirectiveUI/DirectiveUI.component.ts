import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directiveUI',
    template: `
        <section class="container py-5">
            <h1 class="text-warning">CHAPTER 6: UI AntDesign - Material UI</h1><hr>
            <!-- SectionI -->
            <section>
                <h2 class="text-success">I. Ant Design  \</h2>
                <!-- Alert  -->
                <nz-alert nzType="success" nzMessage="Success Tips" nzShowIcon></nz-alert>
                <nz-alert nzType="info" nzMessage="Informational Notes" nzShowIcon></nz-alert>
                <nz-alert nzType="warning" nzMessage="Warning" nzShowIcon></nz-alert>
                <nz-alert nzType="error" nzMessage="Error" nzShowIcon></nz-alert>
                <nz-alert
                nzType="success"
                nzMessage="Success Tips"
                nzDescription="Detailed description and advices about successful copywriting."
                nzShowIcon
                ></nz-alert>
                <nz-alert
                nzType="info"
                nzMessage="Informational Notes"
                nzDescription="Additional description and informations about copywriting."
                nzShowIcon
                ></nz-alert>
                <nz-alert
                nzType="warning"
                nzMessage="Warning"
                nzDescription="This is a warning notice about copywriting."
                nzShowIcon
                ></nz-alert>
                <nz-alert
                nzType="error"
                nzMessage="Error"
                nzDescription="This is an error message about copywriting."
                nzShowIcon
                ></nz-alert>
                <hr>
                <!-- Table  -->
                <nz-table #basicTable [nzData]="listOfData">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let data of basicTable.data">
                        <td>{{ data.name }}</td>
                        <td>{{ data.age }}</td>
                        <td>{{ data.address }}</td>
                        <td>
                            <a>Action 一 {{ data.name }}</a>
                            <!-- <nz-divider nzType="vertical"></nz-divider> -->
                            <a>Delete</a>
                        </td>
                        </tr>
                    </tbody>
                </nz-table>
            </section>
            <hr>

            <!-- SectionII -->
            <section>
                <h2 class="text-success">II. Material UI</h2>
                <div class="alert alert-danger p-3 rounded mb-3">
                    <h5 class="">#Lưu ý</h5>
                    <p>Vì sử dụng Theme của purple-green của materialUI nên sẽ không giống với trên example của material UI</p>
                </div>
                <h3></h3>
                <section>
                    <div class="example-label">Basic</div>
                    <div class="example-button-row">
                        <button mat-button>Basic</button>
                        <button mat-button color="primary">Primary</button>
                        <button mat-button color="accent">Accent</button>
                        <button mat-button color="warn">Warn</button>
                        <button mat-button disabled>Disabled</button>
                        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
                    </div>
                </section>
                <section>
                    <div class="example-label">Raised</div>
                    <div class="example-button-row">
                        <button mat-raised-button>Basic</button>
                        <button mat-raised-button color="primary">Primary</button>
                        <button mat-raised-button color="accent">Accent</button>
                        <button mat-raised-button color="warn">Warn</button>
                        <button mat-raised-button disabled>Disabled</button>
                        <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
                    </div>
                </section>
                <section>
                    <div class="example-label">Stroked</div>
                    <div class="example-button-row">
                        <button mat-stroked-button>Basic</button>
                        <button mat-stroked-button color="primary">Primary</button>
                        <button mat-stroked-button color="accent">Accent</button>
                        <button mat-stroked-button color="warn">Warn</button>
                        <button mat-stroked-button disabled>Disabled</button>
                        <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
                    </div>
                </section>
                <section>
                    <div class="example-label">Flat</div>
                    <div class="example-button-row">
                        <button mat-flat-button>Basic</button>
                        <button mat-flat-button color="primary">Primary</button>
                        <button mat-flat-button color="accent">Accent</button>
                        <button mat-flat-button color="warn">Warn</button>
                        <button mat-flat-button disabled>Disabled</button>
                        <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
                    </div>
                </section>
                <section>
                    <div class="example-label">Icon</div>
                    <div class="example-button-row">
                        <div class="example-flex-container">
                        <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
                            <mat-icon>more_vert</mat-icon>
                        </button>
                        <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
                            <mat-icon>home</mat-icon>
                        </button>
                        <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
                            <mat-icon>menu</mat-icon>
                        </button>
                        <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
                            <mat-icon>favorite</mat-icon>
                        </button>
                        <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
                            <mat-icon>open_in_new</mat-icon>
                        </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="example-label">FAB</div>
                    <div class="example-button-row">
                        <div class="example-flex-container">
                        <div class="example-button-container">
                            <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
                            <mat-icon>delete</mat-icon>
                            </button>
                        </div>
                        <div class="example-button-container">
                            <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
                            <mat-icon>bookmark</mat-icon>
                            </button>
                        </div>
                        <div class="example-button-container">
                            <button mat-fab color="warn" aria-label="Example icon button with a home icon">
                            <mat-icon>home</mat-icon>
                            </button>
                        </div>
                        <div class="example-button-container">
                            <button mat-fab disabled aria-label="Example icon button with a heart icon">
                            <mat-icon>favorite</mat-icon>
                            </button>
                        </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="example-label">Mini FAB</div>
                    <div class="example-button-row">
                        <div class="example-flex-container">
                        <div class="example-button-container">
                            <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
                            <mat-icon>menu</mat-icon>
                            </button>
                        </div>
                        <div class="example-button-container">
                            <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">
                            <mat-icon>plus_one</mat-icon>
                            </button>
                        </div>
                        <div class="example-button-container">
                            <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">
                            <mat-icon>filter_list</mat-icon>
                            </button>
                        </div>
                        <div class="example-button-container">
                            <button mat-mini-fab disabled aria-label="Example icon button with a home icon">
                            <mat-icon>home</mat-icon>
                            </button>
                        </div>
                        </div>
                    </div>
                </section>
        </section>
    `,
    styles: [
        `
        nz-alert {
        margin-bottom: 16px;
        }

        section {
        display: table;
        }

        .example-label {
        display: table-cell;
        color: #fff !important;
        font-size: 14px;
        margin-left: 8px;
        min-width: 120px;
        }

        .example-button-row {
        display: table-cell;
        width: 490px;
        }

        .example-button-row .mat-button-base {
        margin: 8px 8px 8px 0;
        }

        .example-flex-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        }

        .example-button-container {
        display: flex;
        justify-content: center;
        width: 120px;
        }
    `
    ]
})

export class DirectiveUIComponent implements OnInit {
    tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    value = 3;
    listOfData: Person[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];

   
    ngOnInit() {
     
    }
}

interface Person {
    key: string;
    name: string;
    age: number;
    address: string;
}
