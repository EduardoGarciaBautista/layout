import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UserModel} from "@models/user.model";
import {RoleModel} from "@models/role.model";
import {FilterModel} from "@models/filter.model";

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit, OnChanges {

    @Input() userList: UserModel[] = [];

    @Input() rolList: RoleModel[] = [];

    @Input() filters: FilterModel | null = null;

    @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

    @Output() onChangeStatus: EventEmitter<{ userEmail: string, value: boolean }> =
        new EventEmitter<{ userEmail: string, value: boolean }>();

    @Output() onEdit: EventEmitter<UserModel> = new EventEmitter<UserModel>();


    selected: number | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

    setSelected(index: number) {
        this.selected = index;
    }

    delete(userEmail: string) {
        this.onDelete.emit(userEmail);
        this.selected = undefined;
    }

    changeStatus(value: boolean, userEmail: string) {
        this.onChangeStatus.emit({userEmail, value});
    }

    edit(user: UserModel): void {
        this.onEdit.emit(user);
    }

    ngOnChanges(changes: SimpleChanges): void {

    }
}
