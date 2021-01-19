import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {

    @Input() isActive = false;

    @Output() active: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    toggle(): void {
        this.active.emit(!this.isActive);
    }

}
