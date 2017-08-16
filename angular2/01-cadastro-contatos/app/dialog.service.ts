import { Injectable } from "@angular/core/src/core";

@Injectable()
export class DialogService{
    confirm(message?: string){
        return new Promise(resolve => {
            return resolve(window.confirm(message || 'Confirmar?'));
        })
    }
}