export class PetfoodPage {
    page = 1
    pageSize = 5
    collectionSize: number

    constructor(page: number, pageSize: number, collectionSize: number) {
        this.page = page
        this.pageSize = pageSize
        this.collectionSize = collectionSize
    }

}
