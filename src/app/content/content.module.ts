import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { HomeComponent } from './home'
import { PetfoodModule } from './petfood'

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        PetfoodModule,
    ],
    providers: []
})
export class ContentModule { }
