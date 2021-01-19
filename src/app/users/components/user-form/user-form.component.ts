import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "@models/user.model";
import {RoleModel} from "@models/role.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DropDownModel} from "@models/drop-down.model";
import {CREATE, EDIT} from "../../../constants/global.constants";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

    @Input() user: UserModel | null = null;

    @Input() title: string = '';

    @Input() roleList: RoleModel[] = [];

    @Output() onSave: EventEmitter<{ user: UserModel, option: number }> = new EventEmitter<{ user: UserModel, option: number }>();

    @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();


    form: FormGroup | undefined;

    option = EDIT;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit(): void {
        if (this.user && this.form) {
            this.form.patchValue(this.user);
        }
        if (!this.user) {
            this.option = CREATE;
        }
    }

    createForm() {
        this.form = this.fb.group({
            picture: [''],
            name: ['', Validators.required],
            fathersLastName: ['', Validators.required],
            mothersLastName: ['', Validators.required],
            email: ['', Validators.required],
            roleId: ['', Validators.required],
            active: [false, Validators.required]
        });

    }

    isActive(event: boolean) {
        if (this.form) {
            this.form.controls['active'].setValue(event);
        }
    }

    roleChange(event: DropDownModel) {
        if (this.form) {
            this.form.controls['roleId'].setValue(event.value);
        }
    }

    onSubmit(event: Event) {
        event.preventDefault();
        if (this.form && this.form.valid) {
            this.onSave.emit({user: this.form.value, option: this.option});
            this.form.reset();
        }
    }

    close() {
        this.onClose.emit(true);
    }

    getPhoto(event: any) {
        const files = event.target.files;
        if (files[0] && this.form) {
            const reader = new FileReader();

            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.form?.controls['picture'].setValue(reader.result);
            }

        }
    }
}
