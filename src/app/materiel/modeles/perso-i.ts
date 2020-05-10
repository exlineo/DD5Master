export interface PersoI {
    id: number;
    nom: string;
    joueur: string;
    cree?: string;
    maj?: string;
    puissance: {
        niveau: number;
        xp: number;
        ca: number;
        pvMax: number;
        pvActu: number;
        pvTmp: number;
        desVie: number,
        initiative: number;
        vitesse: number,
        sauvegarde: Array<string>,
        inspiration: number;
        bonusMaitrise: number;
        competences: Array<string>,
        perception: number;
        jdsMort: {
            reussites: number;
            echecs: number
        },
        carac:
        {
            force: number;
            dexterite: number;
            constitution: number;
            intelligence: number;
            sagesse: number;
            charisme: number
        }
    },
    armes: Array<PersoArmeI>,
    sorts: PersoSortI,
    description: {
        classe: string,
        img: Array<string>,
        apparence: string,
        historique: string,
        race: string,
        alignement: string,
        physique: { age: number; taille: string, poids: string, yeux: string, peau: string, cheveux: string },
        allies: string
    },
    possessions: Array<PersoPossessionI>;
}
export interface PersoPossessionI {
    nom: string; pds: string; descr: string
}
export interface PersoSortI {
    nombre: Array<number>,
    ddSauvegarde: number;
    bonusAtt: number;
    preparation: number;
    livre: Array<PersoLivreI>;
}
export interface PersoLivreI {
    nom: string,
    bonusAtt: number;
    degats: number;
    bonusDeg: number;
    duree: number;
    tps: number;
    aire: string,
    descr: string,
    lien: string;
}
export interface PersoArmeI {
    nom: string,
    bonusAtt: number;
    degats: string;
    bonusDeg: number;
    descr: string;
}