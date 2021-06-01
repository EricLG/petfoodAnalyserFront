import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PetfoodListComponent } from './petfood-list.component'

@NgModule({
    declarations: [
        PetfoodListComponent,
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
