import {Component, OnInit} from '@angular/core';
import {MODAL_SM} from "../../../constants/global.constants";
import {RoleModel} from "@models/role.model";
import {RoleService} from "../../../core/services/role.service";
import {UserService} from "../../../core/services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

    readonly SIZE_MODAL = MODAL_SM;
    roleList: RoleModel[] = [];
    showModal = false;

    constructor(private roleService: RoleService,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.roleService.getRoles().subscribe(({roles}) => {
            this.roleList = roles;
        });
    }

    onSaveUser(event: any): void {
        this.userService.createUser(event.user);
        this.showModal = false;
    }

    onCloseModal(): void {
        this.showModal = false;
    }

    onCreate() {
        this.showModal = true;
    }

    onPreview() {
    }

}
