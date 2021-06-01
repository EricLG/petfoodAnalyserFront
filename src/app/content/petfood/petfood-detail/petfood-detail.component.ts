import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { Petfood } from './petfood'

import { find } from 'lodash'

@Component({
    selector: 'app-petfood-detail',
    templateUrl: './petfood-detail.component.html',
    styleUrls: ['./petfood-detail.component.scss']
})
export class PetfoodDetailComponent implements OnInit {

    id = ''
    petfood: Petfood|undefined = undefined

    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params: Params) => {
            this.id = params['id']
        })
    }

    getDetail(id: string): Petfood|undefined {
        const list: Petfood[] = [
            { id: 1, animal: 'dogs', brand: '1ST CHOICE', name: 'Croissance miniature', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
            { id: 2, animal: 'dogs', brand: '1ST CHOICE', name: 'Croissance moyennes', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
            { id: 3, animal: 'dogs', brand: 'Aatu', name: 'Aatu', foodType: 'Croquettes', ingredients: 'Saumon, Hareng déshydraté, Patate douce' },
            { id: 4, animal: 'cats', brand: '1ST CHOICE', name: 'Contrôle Du Poids Adulte', foodType: 'Croquettes', ingredients: 'Poulet frais, Farine de poulet, Riz' },
            { id: 5, animal: 'cats', brand: '1ST CHOICE', name: ' Peau et Pelage Santé Pour Chat Adulte Flocons de Saumon', foodType: 'Croquettes', ingredients: 'Saumon, Gomme de guar, Huile de thon' },
            { id: 6, animal: 'cats', brand: 'Aatu', name: 'Free Run Chicken (Poulet)', foodType: 'Croquettes', ingredients: 'Poulet, Patate douce, Pois chiches' },
        ]

        return <Petfood> find(list, {'id': id})
    }

}
