export interface WsSendI {
    msg:string; // Message textuel transmis
    lien?:string; // Lien vers la ressource à ouvrir
    type?:string; // Type de ressource transmise
    date?:string; // Heure d'envoie
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
    date = "";
}