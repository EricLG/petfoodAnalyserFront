import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PetfoodOutlineComponent } from './petfood-outline.component'

describe('PetfoodDetailComponent', () => {
    let component: PetfoodOutlineComponent
    let fixture: ComponentFixture<PetfoodOutlineComponent>

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [PetfoodOutlineComponent]
        })
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(PetfoodOutlineComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
