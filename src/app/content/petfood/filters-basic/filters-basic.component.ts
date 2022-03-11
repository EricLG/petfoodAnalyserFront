import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-filters-basic',
    templateUrl: './filters-basic.component.html',
    styleUrls: ['./filters-basic.component.scss']
})
export class FiltersBasicComponent implements OnInit {

    public isFirstDivCollapsed = false;
    public isSecondDivCollapsed = false;

    ngOnInit(): void {
        console.log('onInit')
    }

    getToggleIcon(isCollapsed: boolean): string {
        return isCollapsed ? 'fa-angle-up' : 'fa-angle-down'
    }
}
