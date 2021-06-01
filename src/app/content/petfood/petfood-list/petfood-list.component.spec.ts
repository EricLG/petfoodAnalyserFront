import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetfoodListComponent } from './petfood-list.component'

describe('PetfoodListComponent', () => {
    let component: PetfoodListComponent
    let fixture: ComponentFixture<PetfoodListComponent>

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [PetfoodListComponent]
        })
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(PetfoodListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
