import  { Component, OnInit } from "@angular/core";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { DialogService } from "../dialog.service";

@Component({
    moduleId : module.id,
    selector : 'contatos-lista',
    templateUrl : 'contatos-lista.component.html',
    // providers : [ContatoService]
})
export class ContatosListaComponent implements OnInit{
    contatos : Contato[];

    constructor(
        private contatoService : ContatoService, 
        private dialogService : DialogService
    ){}

    ngOnInit() : void{
        this.contatoService.getContatos()
            .then((contatos : Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log("Aconteceu um erro: ", err);
            });
    }

    onDelete(contato : Contato) : void{
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete : boolean) => {
                if(canDelete){
                    this.contatoService.delete(contato)
                        .then(() => {

                            this.contatos = this.contatos.filter(c => c.id != contato.id);
                            
                        }).catch(err => console.log(err));
                }
            })

    }
}