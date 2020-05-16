export interface WsSendI {
    msg:string;
    type?:string;
}
export interface WsRessourceI{
    msg:string;
    type?:string;
}
export class WsSend implements WsSendI{
    msg = "";
    type = "";
}