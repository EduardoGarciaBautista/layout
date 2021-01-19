import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InitAppRoutingModule} from './init-app-routing.module';
import {LayoutComponent} from "../layout/layout.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    InitAppRoutingModule,
    SharedModule
  ]
})
export class InitAppModule {
}
