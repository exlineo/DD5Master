export interface ReglesI {
    classes:Array<ClasseI>;
    sorts:Array<SortI>;
    monstres:Array<MonstreI>;
}
export interface ClasseI{
    nom: string;
    lien: string;
    historique:Array<string>;
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
    lien: string;
    img?:string;
}