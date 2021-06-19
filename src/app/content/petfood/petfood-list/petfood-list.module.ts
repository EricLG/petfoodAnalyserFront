import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PetfoodListComponent } from './petfood-list.component'
import { PetfoodOutlineComponent } from './petfood-outline'

@NgModule({
    declarations: [
        PetfoodListComponent,
        PetfoodOutlineComponent
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
