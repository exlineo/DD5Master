export interface RessourceI {
    id?:string | number;
    nom:string;
    lien:string;
    scenario:ScenarioI;
}
export interface ScenarioI {
    id?:string | number;
    nom:string;
    descr?:string;
    date?:string | number;
}

export class Ressource implements RessourceI{
    id = 0;
    nom = "";
    lien = "";
    scenario = {id:0,nom:"",descr:"",date:""};
}

export class Scenard implements ScenarioI{
    id=0;
    nom="";
    descr="";
    date=0
}