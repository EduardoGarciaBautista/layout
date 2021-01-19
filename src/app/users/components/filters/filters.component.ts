import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DROP1_DATA} from "../../../core/data/drop-1.data";
import {DROP2_DATA} from "../../../core/data/drop-2.data";
import {DROP3_DATA} from "../../../core/data/drop-23data";
import {FilterModel} from "@models/filter.model";
import {VIEW_TYPE_CARD, VIEW_TYPE_TABLE} from "../../../constants/global.constants";

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {

    @Output() onFilterChange: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();

    readonly VIEW_TYPE_TABLE = VIEW_TYPE_TABLE;
    readonly VIEW_TYPE_CARD = VIEW_TYPE_CARD;


    DROP1_DATA = DROP1_DATA;
    DROP2_DATA = DROP2_DATA;
    DROP3_DATA = DROP3_DATA;

    filters: FilterModel = {
        alphabet: null,
        page: null,
        query: '',
        type: null,
        viewType: VIEW_TYPE_TABLE
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    onChangeFilter(event: any): void {

        this.filters = {
            ...this.filters,
            alphabet: null,
            page: null,
            query: '',
            type: null,
        };

        if (event.id === 1) {
            this.filters.page = event;
        } else if (event.id === 0) {
            this.filters.alphabet = event;
        } else {
            this.filters.type = event;
        }
        this.onFilterChange.emit({...this.filters});

    }

    queryChange(query: string): void {
        this.onFilterChange.emit({...this.filters, query});
    }

    changeViewType(value: number): void {
        this.filters.viewType = value;
        this.onFilterChange.emit({...this.filters});
    }

}
