import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { PetfoodService } from 'src/app/services/petfoodService'

import { Petfood } from '../../../models/petfood'
import { PetfoodPage } from '../../../models/petfoodPage'

@Component({
    selector: 'app-petfood-list',
    templateUrl: './petfood-list.component.html',
    styleUrls: ['./petfood-list.component.scss']
})
export class PetfoodListComponent implements OnInit {

    animal = ''
    petfoodList: Petfood[] = []
    petfoodPage: PetfoodPage = new PetfoodPage(1, 5, 0)

    constructor(
        private route: ActivatedRoute,
        private petfoodService: PetfoodService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.animal = params['animal']
            this.getPetfoodList(this.animal, this.petfoodPage)
        })
    }

    getPetfoodList(animal: string, page: PetfoodPage): void {
        this.petfoodService.getPetfoodList(animal, page).subscribe((result: {list: Petfood[], page: PetfoodPage}) => {
            this.petfoodList = result.list.map((petfood: Petfood) => new Petfood(petfood))
            this.petfoodPage = result.page
        })
    }

    onPageChange(newPage: number): void {
        this.petfoodPage.page = newPage
        this.getPetfoodList(this.animal, this.petfoodPage)
    }
}
