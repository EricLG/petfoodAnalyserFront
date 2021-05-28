import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './content/cats';
import { DogsComponent } from './content/dogs';

import { HomeComponent } from './content/home';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dogs', component: DogsComponent },
    { path: 'cats', component: CatsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
