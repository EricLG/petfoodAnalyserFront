import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ContentModule } from './content'
import { FooterComponent } from './footer'
import { NavComponent } from './nav'

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContentModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
