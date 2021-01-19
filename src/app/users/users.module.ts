import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./pages/users/users.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UsersHeaderComponent} from "./components/users-header/users-header.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {UsersTableComponent} from './components/users-table/users-table.component';
import {SharedModule} from "../shared/shared.module";
import { RolePipe } from './pipes/role.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FiltersPipe } from './pipes/filters.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    UsersHeaderComponent,
    UsersListComponent,
    FiltersComponent,
    UsersTableComponent,
    RolePipe,
    UserCardComponent,
    UserFormComponent,
    FiltersPipe,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UsersModule {
}
