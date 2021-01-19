import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "@models/user.model";
import {RoleModel} from "@models/role.model";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
})
export class UserCardComponent implements OnInit {

    @Input() user: UserModel | null = null;

    @Input() roleList: RoleModel[] = [];

    @Output() onChangeStatus: EventEmitter<{ userEmail: string, value: boolean }>
        = new EventEmitter<{ userEmail: string; value: boolean }>();

    @Output() onDelete: EventEmitter<string>
        = new EventEmitter<string>();

    @Output() onEdit: EventEmitter<UserModel> = new EventEmitter<UserModel>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onChangeStatusCard(value: boolean): void {
        if (this.user) {
            this.onChangeStatus.emit({userEmail: this.user.email, value})
        }
    }

    delete(userEmail: string): void {
        this.onDelete.emit(userEmail);
    }

    edit(user: UserModel): void {
        this.onEdit.emit(user);
    }

}
