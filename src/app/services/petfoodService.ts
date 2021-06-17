import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Petfood } from '../content/petfood/petfood-detail'

@Injectable({
    providedIn: 'root',
})
export class PetfoodService {

    private host = 'http://localhost'
    private port = '3000'

    constructor(private http: HttpClient) { }

    getPetfoodPage(animal: string): Observable<Petfood[]> {
        return this.http.get<Petfood[]>(`${this.host}:${this.port}/petfood/${animal}`)
    }

    getPetfoodDetail(id: string): Observable<Petfood> {
        return this.http.get<Petfood>(`${this.host}:${this.port}/petfood/${id}/detail`)
    }
}
