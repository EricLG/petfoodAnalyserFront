import { Component, Input } from '@angular/core'
import { first, shuffle } from 'lodash'

import { Petfood } from '../../../models/petfood'

@Component({
    selector: 'app-petfood-outline',
    templateUrl: './petfood-outline.component.html',
    styleUrls: ['./petfood-outline.component.scss']
})
export class PetfoodOutlineComponent {

    @Input() petfood: Petfood|undefined

    rpc = 40

    getPetfoodUrl(id: number): string[] {
        return ['/petfood', id.toString(), 'detail']
    }

    getImagePath(): string {
        const samples = [
            '0AA721D6E760455A82C482EEB72E9A9E.jpg',
            '1CA77FC1096A44E2951BBCDF610E78F1.jpg',
            '1D8C7BA698204BBDAC2D9F712DC8835C.jpg',
            '3DA48F0607B849F2B3D8A78DF9D51D9A.jpg'
        ]

        return 'assets/' + first(shuffle(samples))
    }

    getLabelForPotentialMissingInfo(value: number|undefined): string {
        return value ? value.toString() : 'N/A'
    }
}
