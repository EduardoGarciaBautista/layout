import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropDownModel} from "@models/drop-down.model";

@Component({
    selector: 'app-drop-down',
    templateUrl: './drop-down.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent implements OnInit {

    @Output() onSelectedChange: EventEmitter<DropDownModel> = new EventEmitter<DropDownModel>();

    @Input() data: DropDownModel[] = [];

    @Input() initialState: number | null = null;

    selected: DropDownModel | null = null;

    show = false;

    constructor() {
    }

    ngOnInit(): void {
        const item = this.data.find(({id}) => id === this.initialState);
        if (item) {
            this.selected = item;
            console.log(this.selected);
        }
    }

    setSelected(event: Event, item: DropDownModel) {
        event.preventDefault();
        this.selected = item;
        this.onSelectedChange.emit(item);
    }
}
