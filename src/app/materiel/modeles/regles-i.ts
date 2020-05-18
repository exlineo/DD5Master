export interface ReglesI {
    carac:Array<string>;
    classes:Array<ClasseI>;
    races:Array<RaceI>;
    sorts:Array<SortI>;
    monstres:Array<MonstreI>;
    alignements:Array<AligneI>;
}
export interface ClasseI{
    nom: string;
    lien?: string;
    historique?:Array<string>;
}
export interface SortI{
    nom: string;
    niveau:number;
    lien: string;
    type?:string;
    classe?:string;
}
export interface MonstreI{
    nom: string;
    puissance:number;
    lien?: string;
    img?:string;
}

export interface RaceI{
    nom:string;
    lien?:string;
    img?:string;
}

export interface AligneI{
    nom:string;
    acronyme:string;
}