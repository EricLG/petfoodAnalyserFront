import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { HomeComponent } from './content/home'
import { PetfoodDetailComponent } from './content/petfood/petfood-detail'
import { PetfoodListComponent } from './content/petfood/petfood-list/petfood-list.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'petfoods/:animal', component: PetfoodListComponent },
    { path: 'petfood/:id/detail', component: PetfoodDetailComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
