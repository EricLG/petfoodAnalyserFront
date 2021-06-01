import { Component, Input, OnInit } from '@angular/core'

import { Petfood } from '../petfood-detail'

@Component({
    selector: 'app-petfood-list',
    templateUrl: './petfood-list.component.html',
    styleUrls: ['./petfood-list.component.scss']
})
export class PetfoodListComponent implements OnInit {

    @Input() animal = ''

    petfoodList: Petfood[] = []

    ngOnInit(): void {
        if (this.animal === 'dogs') {
            this.petfoodList = this.getDogsList()
        } else {
            this.petfoodList = this.getCatsList()
        }
        console.log(this.petfoodList)
    }

    getDogsList(): Petfood[] {
        return [
            { id: 1, animal: 'dogs', brand: '1ST CHOICE', name: 'Croissance miniature', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
            { id: 2, animal: 'dogs', brand: '1ST CHOICE', name: 'Croissance moyennes', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
            { id: 3, animal: 'dogs', brand: 'Aatu', name: 'Aatu', foodType: 'Croquettes', ingredients: 'Saumon, Hareng déshydraté, Patate douce' },
        ]
    }

    getCatsList(): Petfood[] {
        return [
            { id: 4, animal: 'cats', brand: '1ST CHOICE', name: 'Contrôle Du Poids Adulte', foodType: 'Croquettes', ingredients: 'Poulet frais, Farine de poulet, Riz' },
            { id: 5, animal: 'cats', brand: '1ST CHOICE', name: ' Peau et Pelage Santé Pour Chat Adulte Flocons de Saumon', foodType: 'Croquettes', ingredients: 'Saumon, Gomme de guar, Huile de thon' },
            { id: 6, animal: 'cats', brand: 'Aatu', name: 'Free Run Chicken (Poulet)', foodType: 'Croquettes', ingredients: 'Poulet, Patate douce, Pois chiches' },
        ]
    }

    getPetfoodUrl(id: number): string[] {
        return ['/petfood', id.toString()]
    }
}
