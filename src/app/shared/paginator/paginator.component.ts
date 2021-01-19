import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NEXT, PREVIEW} from "../../constants/global.constants";

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
})
export class PaginatorComponent implements OnInit, OnChanges {

    @Output() onPageChange: EventEmitter<{ page: number, direction: string }> = new EventEmitter<{ page: number; direction: string }>();

    @Input() pagesNumber: number = 0;

    @Input() actualPage: number = 0;

    pages: number[] = [];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.pagesNumber) {
            this.pages = [];
            for (let i = 0; i < this.pagesNumber; i++) {
                this.pages.push(i);
            }
        }
    }

    ngOnInit(): void {
    }

    next(event: Event) {
        event.preventDefault();
        if ((this.actualPage + 1) <= this.pagesNumber) {
            this.onPageChange.emit({page: this.actualPage++, direction: NEXT})
        }

    }

    preview(event: Event) {
        event.preventDefault();
        if (this.actualPage - 1 > 0) {
            this.onPageChange.emit({page: this.actualPage--, direction: PREVIEW});
        }

    }

}
