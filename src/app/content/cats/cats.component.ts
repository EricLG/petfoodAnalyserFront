import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-cats',
    templateUrl: './cats.component.html',
    styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

    ngOnInit(): void {
        console.log('Cats component')
    }

}
