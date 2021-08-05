import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ContentModule } from './content'
import { LayoutModule } from './layout'

@NgModule({
    declarations: [
        AppComponent,
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
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
