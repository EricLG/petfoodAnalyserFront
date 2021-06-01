import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PetfoodDetailComponent } from './petfood-detail/petfood-detail.component'
import { PetfoodListModule } from './petfood-list'

@NgModule({
    declarations: [
        PetfoodDetailComponent,
    ],
    imports: [
        CommonModule,
        PetfoodListModule
    ],
    providers: [],
    exports: [
        PetfoodDetailComponent,
        PetfoodListModule
    ]
})
export class PetfoodModule { }
