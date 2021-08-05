import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Petfood } from '../models/petfood'
import { PetfoodPage } from '../models/petfoodPage'

@Injectable({
    providedIn: 'root',
})
export class PetfoodService {

    constructor(private http: HttpClient) { }

    getPetfoodList(animal: string, page: PetfoodPage): Observable<{list: Petfood[], page: PetfoodPage}> {
        return this.http.post<{list: Petfood[], page: PetfoodPage}>(`/api/petfood/${animal}`, page)
    }

    getPetfoodDetail(id: string): Observable<Petfood> {
        return this.http.get<Petfood>(`/api/petfood/${id}/detail`)
    }
}
