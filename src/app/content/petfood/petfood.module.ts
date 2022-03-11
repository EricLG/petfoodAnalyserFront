import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

import { FiltersBasicComponent } from './filters-basic'
import { GaugeModule } from '../../utils/gauge'
import { PetfoodDetailComponent } from './petfood-detail'
import { PetfoodListComponent } from './petfood-list'
import { PetfoodOutlineComponent } from './petfood-outline'

@NgModule({
    declarations: [
        FiltersBasicComponent,
        PetfoodDetailComponent,
        PetfoodListComponent,
        PetfoodOutlineComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
        GaugeModule
    ],
    providers: []
})
export class PetfoodModule { }
