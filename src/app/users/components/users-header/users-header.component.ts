import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-users-header',
    templateUrl: './users-header.component.html',
})
export class UsersHeaderComponent implements OnInit {

    @Output() onPreview: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output() onCreate: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    preview(): void {
        this.onPreview.emit(true);
    }

    create(): void {
        this.onCreate.emit(true);
    }

}
