import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { GaugeComponent } from 'src/app/utils/gauge'
import { PetfoodListComponent } from './petfood-list.component'
import { PetfoodOutlineComponent } from './petfood-outline'

@NgModule({
    declarations: [
        PetfoodListComponent,
        PetfoodOutlineComponent,
        GaugeComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [
        PetfoodListComponent
    ]
})
export class PetfoodListModule { }
