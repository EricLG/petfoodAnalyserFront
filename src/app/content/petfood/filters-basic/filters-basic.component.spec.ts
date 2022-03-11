import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FiltersBasicComponent } from './filters-basic.component'

describe('PetfoodDetailComponent', () => {
    let component: FiltersBasicComponent
    let fixture: ComponentFixture<FiltersBasicComponent>

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [FiltersBasicComponent]
        })
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(FiltersBasicComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
