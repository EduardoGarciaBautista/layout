import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SwitchComponent} from './switch/switch.component';
import {DropDownComponent} from './drop-down/drop-down.component';
import {ModalComponent} from './modal/modal.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidenavComponent,
        SwitchComponent,
        DropDownComponent,
        ModalComponent,
        PaginatorComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        SwitchComponent,
        DropDownComponent,
        ModalComponent,
        PaginatorComponent
    ]
})
export class SharedModule {
}
