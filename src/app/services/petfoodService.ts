import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Petfood } from '../models/petfood'

@Injectable({
    providedIn: 'root',
})
export class PetfoodService {

    constructor(private http: HttpClient) { }

    getPetfoodPage(animal: string): Observable<Petfood[]> {
        return this.http.get<Petfood[]>(`/api/petfood/${animal}`)
    }

    getPetfoodDetail(id: string): Observable<Petfood> {
        return this.http.get<Petfood>(`/api/petfood/${id}/detail`)
    }
}
