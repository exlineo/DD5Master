import { ProfilI } from './profilI'

export interface PersoI {
    id: number;
    nom: string;
    joueur: string;
    cree?: string;
    maj?: string;
    niveau: number;
    xp: number;
    ca: number;
    pvMax: number;
    pvActu: number;
    pvTmp: number;
    desVie?: number | string;
    initiative: number;
    vitesse: number;
    sauvegarde?: Array<string>;
    inspiration?: number;
    bonusMaitrise: number;
    competences: Array<string>;
    capacites?:Array<string>;
    langues?:Array<string>;
    perception?: number;
    jdsMort?: PersoJdsMort;
    carac: PersoCaracI;
    armes: Array<PersoArmeI>;
    sorts: PersoSortI;
    description:PersoDescrI;
    possessions: Array<PersoPossessionI>;
    tresors: Array<PersoTresorI>;
}
export interface PersoPossessionI {
    nom: string; pds?: string; quantite?:number | string; descr?: string;
}
export interface PersoTresorI {
    nom: string; magie: string; quantite?:number | string; descr?: string;
}
export interface PersoSortI {
    nombre: Array<number>;
    ddSauvegarde: number | string;
    bonusAtt: number;
    preparation: number | string;
    livre: Array<PersoLivreI>;
}
export interface PersoLivreI {
    niveau:number;
    nom: string;
    ecole?:string;
    bonusAtt?: number;
    degats?: number | string;
    bonusDeg?: number;
    duree?: number | string;
    portee?:number | string;
    tps?: number | string;
    aire?: string | string;
    descr?: string;
    lien?: string;
    composantes?:string;
    appris?:boolean;
}
export interface PersoArmeI {
    nom: string;
    bonusAtt: number;
    degats: string;
    bonusDeg: number;
    descr: string;
}
export interface PersoCaracI {
    force: number;
    dexterite: number;
    constitution: number;
    intelligence: number;
    sagesse: number;
    charisme: number
}
export interface PersoDescrI {
    classe: string;
    img: Array<string>;
    apparence: string;
    historique: string;
    race: string;
    alignement: string;
    physique: PersoPhysique;
    allies: string
}
export interface PersoPhysique {
    age?: number | string;
    taille?: string;
    poids?: string;
    yeux?: string;
    peau?: string;
    cheveux?: string
};
export interface PersoJdsMort{
    reussites:number;
    echecs:number;
}

export class Perso implements PersoI {
    id: 0;
    nom: "Personne";
    joueur: "Aucun";
    cree: "";
    maj: "";
    niveau: 0;
    xp: 0;
    ca: 10;
    pvMax: 0;
    pvActu: 0;
    pvTmp: 0;
    desVie: 1;
    initiative: 0;
    vitesse: 9;
    sauvegarde: [];
    inspiration: 0;
    bonusMaitrise: 0;
    competences: [];
    capacites:[];
    langues:[];
    perception: 10;
    jdsMort: {
        reussites: 0,
        echecs: 0
    };
    carac: {
        force: 10,
        dexterite: 10,
        constitution: 10,
        intelligence: 10,
        sagesse: 10,
        charisme: 10
    };
    armes: [
        {
            nom: "",
            bonusAtt: 0,
            degats: "",
            bonusDeg: 0,
            descr: ""
        }
    ];
    sorts: {
        nombre: [
            0,
            0,
            0
        ];
        ddSauvegarde: 0;
        bonusAtt: 0;
        preparation: 0;
        livre: [
            {
                niveau:0,
                nom: "",
                ecole:","
                bonusAtt: 0,
                degats: 0,
                bonusDeg: 0,
                duree: 0,
                tps: 0,
                aire: "",
                descr: "",
                composantes:"",
                lien: ""
            }
        ]
    };
    description: {
        classe: "";
        img: [];
        apparence: "";
        historique: "";
        race: "";
        alignement: "";
        physique: {
            age: "0";
            taille: "";
            poids: "";
            yeux: "";
            peau: "";
            cheveux: ""
        };
        allies: ""
    };
    possessions: [
        {
            nom: "",
            pds: "",
            descr: ""
        }
    ];
    tresors: [
        {
            nom: "",
            magie: "",
            descr: ""
        }
    ]
}