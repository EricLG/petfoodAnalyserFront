import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { CatsComponent } from './content/cats'
import { DogsComponent } from './content/dogs'
import { HomeComponent } from './content/home'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cats', component: CatsComponent },
    { path: 'dogs', component: DogsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
