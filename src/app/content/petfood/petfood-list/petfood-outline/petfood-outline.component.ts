import { Component, Input } from '@angular/core'

import { Petfood } from '../../petfood-detail'

@Component({
    selector: 'app-petfood-outline',
    templateUrl: './petfood-outline.component.html',
    styleUrls: ['./petfood-outline.component.scss']
})
export class PetfoodOutlineComponent {

    @Input() petfood: Petfood | undefined


    getPetfoodUrl(id: number): string[] {
        return ['/petfood', id.toString(), 'detail']
    }
}
