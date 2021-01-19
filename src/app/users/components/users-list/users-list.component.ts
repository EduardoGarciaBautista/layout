import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../core/services/user.service";
import {UserModel} from "@models/user.model";
import {RoleService} from "../../../core/services/role.service";
import {RoleModel} from "@models/role.model";
import {FilterModel} from "@models/filter.model";
import {MODAL_SM, NEXT, VIEW_TYPE_TABLE} from "../../../constants/global.constants";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

    userList: UserModel[] = [];
    roleList: RoleModel[] = [];

    readonly SIZE_MODAL = MODAL_SM;

    readonly VIEW_TYPE = VIEW_TYPE_TABLE;

    showModal = false;

    filters: FilterModel = {
        page: null,
        alphabet: null,
        query: '',
        type: null,
        viewType: VIEW_TYPE_TABLE
    }

    userToEdit: UserModel | null = null;


    // Paginator

    pagesNumber: number = 0;

    actualPage = 0;

    constructor(private userService: UserService,
                private roleService: RoleService) {
    }

    ngOnInit(): void {
        this.userService.userListener$.subscribe(data => {
            this.userList = data;
            this.actualPage = 1;


        });
        this.roleService.getRoles().subscribe(({roles}) => {
            this.roleList = roles;
        });
    }

    onDelete(userEmail: string) {
        this.userService.deleteUser(userEmail);
    }

    onChangeStatus({userEmail = '', value = false}) {
        this.userService.changeStatus(userEmail, value);
    }

    onFilterChange(event: FilterModel) {
        this.filters = {...event};
        if (this.filters.page) {
            this.getPagesNumber();
        }

    }

    onEdit(user: UserModel): void {
        this.userToEdit = user;
        this.showModal = true;
    }

    onSaveUser(event: any): void {

        this.userService.editUser(event.user);

        this.showModal = false;
    }

    onCloseModal() {
        this.showModal = false;
    }

    getPagesNumber() {
        if (this.filters.page) {
            this.pagesNumber = Math.ceil(this.userList.length / this.filters.page?.value);
        }
    }

    onPageChange(event: any) {
        if (this.filters.page) {
            this.filters = {
                ...this.filters, page:
                    {...this.filters.page, actualPage: event.direction === NEXT ? event.page + 1 : event.page - 1}
            }
        }

    }
}
