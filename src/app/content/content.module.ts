import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CatsComponent } from './cats'
import { DogsComponent } from './dogs'
import { HomeComponent } from './home'
import { PetfoodModule } from './petfood'

@NgModule({
    declarations: [
        HomeComponent,
        CatsComponent,
        DogsComponent,
    ],
    imports: [
        CommonModule,
        PetfoodModule,
    ],
    providers: []
})
export class ContentModule { }
