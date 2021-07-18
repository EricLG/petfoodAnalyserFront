import { round } from 'lodash'

export interface PetfoodInterface {
    _id: number
    animal: string
    foodType: string
    dryOrWet: string
    source?: string
    brand?: string
    reference?: string
    packaging?: string
    bio?: string
    proteins: number
    lipids: number
    fibers?: number
    ashes?: number // Cendres
    moisture?: number // Humidité
    calcium?: number
    phosphorus?: number // phosphore (P)
    omega6?: number // N-6
    omega3?: number // N-3
    starchSource?: string // source d'amidon
    animalProteinSource?: string
    vegetalProteinSource?: string
    monoprotein?: boolean
    ingredients?: string
    nutritionalAdditives?: string // Additifs additionnels
    comment?: string
    brandCountryOrigin?: string
    createdAt: Date
    updatedAt: Date
}

const CARBONHYDRATES_DEFAULT = 0.1

export class Petfood implements PetfoodInterface {
    _id: number
    animal: string
    foodType: string
    dryOrWet: string
    source?: string
    brand?: string
    reference?: string
    packaging?: string
    bio?: string
    proteins: number
    lipids: number
    fibers?: number
    ashes?: number
    moisture?: number
    calcium?: number
    phosphorus?: number
    omega6?: number
    omega3?: number
    starchSource?: string
    animalProteinSource?: string
    vegetalProteinSource?: string
    monoprotein?: boolean
    ingredients?: string
    nutritionalAdditives?: string
    comment?: string
    brandCountryOrigin?: string
    createdAt: Date
    updatedAt: Date

    constructor(petfoodInterace: PetfoodInterface) {
        this._id = petfoodInterace._id
        this.animal = petfoodInterace.animal
        this.foodType = petfoodInterace.foodType
        this.dryOrWet = petfoodInterace.dryOrWet
        this.source = petfoodInterace.source
        this.brand = petfoodInterace.brand
        this.reference = petfoodInterace.reference
        this.packaging = petfoodInterace.packaging
        this.bio = petfoodInterace.bio
        this.proteins = petfoodInterace.proteins
        this.lipids = petfoodInterace.lipids
        this.fibers = petfoodInterace.fibers
        this.ashes = petfoodInterace.ashes
        this.moisture = petfoodInterace.moisture
        this.calcium = petfoodInterace.calcium
        this.phosphorus = petfoodInterace.phosphorus
        this.omega6 = petfoodInterace.omega6
        this.omega3 = petfoodInterace.omega3
        this.starchSource = petfoodInterace.starchSource
        this.animalProteinSource = petfoodInterace.animalProteinSource
        this.vegetalProteinSource = petfoodInterace.vegetalProteinSource
        this.monoprotein = petfoodInterace.monoprotein
        this.ingredients = petfoodInterace.ingredients
        this.nutritionalAdditives = petfoodInterace.nutritionalAdditives
        this.comment = petfoodInterace.comment
        this.brandCountryOrigin = petfoodInterace.brandCountryOrigin
        this.createdAt = petfoodInterace.createdAt
        this.updatedAt = petfoodInterace.updatedAt
    }

    estimatedIngredients: {
        [animal: string]: {
            [dryOrWet: string]: { fibers: number, ashes: number, moisture: number }
        }
    } = {
        cats: {
            dry: { fibers: 3, ashes: 8, moisture: 8 },
            wet: { fibers: 0.5, ashes: 2.5, moisture: 79 },
        },
        dogs: {
            dry: { fibers: 3, ashes: 8, moisture: 10 },
            wet: { fibers: 0.5, ashes: 8, moisture: 77 },
        }
    }

    getFibers(): number {
        return this.fibers ? this.fibers : this.estimatedIngredients[this.animal][this.dryOrWet]['fibers']
    }
    getAshes(): number {
        return this.ashes ? this.ashes : this.estimatedIngredients[this.animal][this.dryOrWet]['ashes']
    }
    getMoisture(): number {
        return this.moisture ? this.moisture : this.estimatedIngredients[this.animal][this.dryOrWet]['moisture']
    }

    // Nitrogen Free Extract (NFE) calcul - ENA : Extractif non azoté
    getNfe(): number {
        const nfe = 100 - (this.proteins + this.lipids + this.getFibers() + this.getAshes() + this.getMoisture())

        return (nfe > 0) ? nfe : CARBONHYDRATES_DEFAULT
    }

    getRatioCaP(): number| undefined {
        let ratio

        if (this.calcium && this.phosphorus) {
            ratio = round(this.calcium / this.phosphorus, 1)
        }
        return ratio
    }

    getRatioO6O3(): number|undefined {
        let ratio

        if (this.omega3 && this.omega6) {
            ratio = round(this.omega6 / this.omega3, 1)
        }
        return ratio
    }

    // Rapport protéines sur calories
    rpc(): number {
        return 0
    }

    // Rapport protéines sur phosphore
    rpp(): number|undefined {
        if (this.proteins && this.phosphorus) {
            return Math.floor(this.proteins/this.phosphorus)
        } else {
            return undefined
        }
    }
}
