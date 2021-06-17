export interface Petfood {
    _id: number
    animal: string
    foodType: string
    source: string
    brand: string
    reference: string
    packaging: string
    bio: string
    proteins: number
    lipids: number
    fibers: number
    ashes: number // Cendres
    moisture: number // Humidité
    calcium: number
    phosphorus: number // phosphore (P)
    omega6: number // N-6
    omega3: number // N-3
    starchSource: string // source d'amidon
    animalProteinSource: string
    vegetalProteinSource: string
    monoprotein: boolean
    ingredients: string
    nutritionalAdditives: string // Additifs additionnels
    comment: string
    brandCountryOrigin: string
    createdAt: Date
    updatedAt: Date
}
