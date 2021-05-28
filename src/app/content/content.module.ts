import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home';
import { DogsComponent } from './dogs';
import { CatsComponent } from './cats';

@NgModule({
    declarations: [
        HomeComponent,
        DogsComponent,
        CatsComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: []
})
export class ContentModule { }
