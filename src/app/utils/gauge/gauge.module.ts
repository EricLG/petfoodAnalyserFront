import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { GaugeComponent } from './gauge.component'

@NgModule({
    declarations: [
        GaugeComponent
    ],
    exports: [
        GaugeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: []
})
export class GaugeModule { }
