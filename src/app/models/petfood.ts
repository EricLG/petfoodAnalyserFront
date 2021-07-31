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
    starch?: number // Amidon
    starchSource?: string // source d'amidon
    animalProteinSource?: string
    vegetalProteinSource?: string
    freshMeatMentionned?: boolean
    ingredients?: string // string csv
    nutritionalAdditives?: string // Additifs additionnels
    certified?: boolean // Ingrédient controlé et certifié
    comment?: string
    brandCountryOrigin?: string
    manufacturyCountry?: string // Pays de fabrication
    parentCompany?: string // Entreprise mère
    createdAt: Date
    updatedAt: Date
}

const CARBOHYDRATES_DEFAULT = 0.1
const ESTIMATED_INGREDIENTS: { [animal: string]: { [dryOrWet: string]: { fibers: number, ashes: number, moisture: number } } } = {
    cats: {
        dry: { fibers: 3, ashes: 8, moisture: 8 },
        wet: { fibers: 0.5, ashes: 2.5, moisture: 79 },
    },
    dogs: {
        dry: { fibers: 3, ashes: 8, moisture: 10 },
        wet: { fibers: 0.5, ashes: 8, moisture: 77 },
    }
}

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
    starch?: number
    starchSource?: string
    animalProteinSource?: string
    vegetalProteinSource?: string
    freshMeatMentionned?: boolean
    ingredients?: string
    nutritionalAdditives?: string
    certified?: boolean
    comment?: string
    brandCountryOrigin?: string
    manufacturyCountry?: string
    parentCompany?: string
    createdAt: Date
    updatedAt: Date

    constructor(pfi: PetfoodInterface) {
        this._id = pfi._id
        this.animal = pfi.animal
        this.foodType = pfi.foodType
        this.dryOrWet = pfi.dryOrWet
        this.source = pfi.source
        this.brand = pfi.brand
        this.reference = pfi.reference
        this.packaging = pfi.packaging
        this.bio = pfi.bio
        this.proteins = pfi.proteins
        this.lipids = pfi.lipids
        this.fibers = pfi.fibers
        this.ashes = pfi.ashes
        this.moisture = pfi.moisture
        this.calcium = pfi.calcium
        this.phosphorus = pfi.phosphorus
        this.omega6 = pfi.omega6
        this.omega3 = pfi.omega3
        this.starch = pfi.starch
        this.starchSource = pfi.starchSource
        this.animalProteinSource = pfi.animalProteinSource
        this.vegetalProteinSource = pfi.vegetalProteinSource
        this.freshMeatMentionned = pfi.freshMeatMentionned
        this.ingredients = pfi.ingredients
        this.nutritionalAdditives = pfi.nutritionalAdditives
        this.certified = pfi.certified
        this.comment = pfi.comment
        this.brandCountryOrigin = pfi.brandCountryOrigin
        this.manufacturyCountry = pfi.manufacturyCountry
        this.parentCompany = pfi.parentCompany
        this.createdAt = pfi.createdAt
        this.updatedAt = pfi.updatedAt
    }

    getFibers(): number {
        return this.fibers ? this.fibers : ESTIMATED_INGREDIENTS[this.animal][this.dryOrWet]['fibers']
    }
    getAshes(): number {
        return this.ashes ? this.ashes : ESTIMATED_INGREDIENTS[this.animal][this.dryOrWet]['ashes']
    }
    getMoisture(): number {
        return this.moisture ? this.moisture : ESTIMATED_INGREDIENTS[this.animal][this.dryOrWet]['moisture']
    }

    // Nitrogen Free Extract (NFE) calcul - ENA : Extractif non azoté
    getNfe(): number {
        const nfe = 100 - (this.proteins + this.lipids + this.getFibers() + this.getAshes() + this.getMoisture())

        return (nfe > 0) ? nfe : CARBOHYDRATES_DEFAULT
    }

    // Ratio Calcium/Phosphorus
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

    getDryMass(nutrient: number): number {
        return nutrient * 100 / (100-this.getMoisture())
    }

    getMetabolizableEnergy(): number {
        const fibers = this.getFibers()
        const dryMassFiber = this.getDryMass(fibers)
        const brutalEnergy = (5.7*this.proteins) + (9.5*this.lipids) + (4.1*(this.getNfe() + fibers))
        let digestibilityEnergy, metabolisableEnergyFactor

        if (this.animal === 'dogs') {
            digestibilityEnergy = 91.2-(1.43 * dryMassFiber)
            metabolisableEnergyFactor = 1.04
        } else {
            digestibilityEnergy = 87.9-(0.88 * dryMassFiber)
            metabolisableEnergyFactor = 0.77
        }

        const digestibleEnergy = brutalEnergy * digestibilityEnergy / 100

        return (digestibleEnergy - (this.proteins * metabolisableEnergyFactor))
    }

    // Rapport protéines sur calories
    rpc(): number {
        return round(this.proteins / this.getMetabolizableEnergy() * 1000)
    }

    // Rapport protéines sur phosphore
    rpp(): number|undefined {
        return (this.proteins && this.phosphorus) ? round(this.proteins/this.phosphorus) : undefined
    }

}
