import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ContentModule } from './content'
import { FooterComponent } from './layout/footer'
import { NavComponent } from './layout/nav'

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        HttpClientModule,
        AppRoutingModule,
        ContentModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
