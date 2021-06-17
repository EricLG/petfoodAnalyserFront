import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

import { Petfood } from './petfood'
import { PetfoodService } from 'src/app/services/petfoodService'

@Component({
    selector: 'app-petfood-detail',
    templateUrl: './petfood-detail.component.html',
    styleUrls: ['./petfood-detail.component.scss']
})
export class PetfoodDetailComponent implements OnInit {

    petfood: Petfood|undefined = undefined

    constructor(
        private route: ActivatedRoute,
        private petfoodService: PetfoodService,
        private toastrService: ToastrService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.getDetail(params['id'])
        })
    }

    getDetail(id: string): void {
        this.petfoodService.getPetfoodDetail(id).subscribe((petfood: Petfood) => {
            this.petfood = petfood
        }, error => {
            this.toastrService.error('Une erreur s\'est produite.')
            console.error(error)
        })
    }

}
