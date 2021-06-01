import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetfoodDetailComponent } from './petfood-detail.component'

describe('PetfoodDetailComponent', () => {
    let component: PetfoodDetailComponent
    let fixture: ComponentFixture<PetfoodDetailComponent>

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [PetfoodDetailComponent]
        })
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(PetfoodDetailComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
