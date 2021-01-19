import {Component, Input, OnInit} from '@angular/core';
import {MODAL_SM} from "../../constants/global.constants";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  @Input() size = MODAL_SM;

  constructor() { }

  ngOnInit(): void {
  }

}
