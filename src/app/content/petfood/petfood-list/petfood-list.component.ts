import { Component, Input, OnInit } from '@angular/core'
import { PetfoodService } from 'src/app/services/petfoodService'

import { Petfood } from '../petfood-detail'

@Component({
    selector: 'app-petfood-list',
    templateUrl: './petfood-list.component.html',
    styleUrls: ['./petfood-list.component.scss']
})
export class PetfoodListComponent implements OnInit {

    @Input() animal = ''

    petfoodList: Petfood[] = []

    constructor(private petfoodService: PetfoodService) {}

    ngOnInit(): void {
        this.getPetfoodList(this.animal)
    }

    getPetfoodList(animal: string): void {
        this.petfoodService.getPetfoodPage(animal).subscribe((petfoodArray: Petfood[]) => {
            this.petfoodList = petfoodArray.map((petfood) => new Petfood(petfood))
        })
    }

}
