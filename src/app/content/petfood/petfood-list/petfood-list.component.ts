import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { PetfoodService } from 'src/app/services/petfoodService'

import { Petfood } from '../petfood-detail'

@Component({
    selector: 'app-petfood-list',
    templateUrl: './petfood-list.component.html',
    styleUrls: ['./petfood-list.component.scss']
})
export class PetfoodListComponent implements OnInit {

    petfoodList: Petfood[] = []

    constructor(
        private route: ActivatedRoute,
        private petfoodService: PetfoodService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.getPetfoodList(params['animal'])
        })
    }

    getPetfoodList(animal: string): void {
        this.petfoodService.getPetfoodPage(animal).subscribe((petfoodArray: Petfood[]) => {
            this.petfoodList = petfoodArray.map((petfood) => new Petfood(petfood))
        })
    }

}
