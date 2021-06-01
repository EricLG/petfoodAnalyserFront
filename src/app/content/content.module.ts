import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CatsComponent } from './cats'
import { DogsComponent } from './dogs'
import { HomeComponent } from './home'

@NgModule({
    declarations: [
        HomeComponent,
        CatsComponent,
        DogsComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: []
})
export class ContentModule { }
