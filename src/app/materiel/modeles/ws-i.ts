export interface WsSendI {
    msg:string; // Message textuel transmis
    lien?:string; // Lien vers la ressource à ouvrir
    type?:string; // Type de ressource transmise
    date?:string | number; // Heure d'envoie
    master?:boolean; // Master ou joueur
    id?:string; // Id Websocket
}
export interface WsRessourceI{
    msg:string;
    type?:string;
}
export class WsSend implements WsSendI{
    msg = "";
    type = "";
    lien="";
    date = "";
    master = false;
    id=""
}

export interface ScenarioI {
    id?:string | number;
    nom:string;
    descr?:string;
    date?:string | number;
    liens?:Array<WsSendI>;
}

export class Scenard implements ScenarioI{
    id=0;
    nom="";
    descr="";
    date=0;
    liens=[];
}