import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

import { FooterComponent } from './footer'
import { NavComponent } from './nav'

@NgModule({
    declarations: [
        NavComponent,
        FooterComponent
    ],
    exports: [
        NavComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    providers: []
})
export class LayoutModule { }
