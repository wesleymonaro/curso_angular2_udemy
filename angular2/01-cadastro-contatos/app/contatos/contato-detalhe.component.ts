import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { ContatoService } from "./contato.service";

@Component({
    moduleId : module.id,
    selector : "contato-detalhe",
    templateUrl : "contato-detalhe.component.html"
})
export class ContatoDetalheComponent implements OnInit{

    constructor(
        private contatoService : ContatoService,
        private route : ActivatedRoute,
        private location : Location
    ){}
    ngOnInit():void{
        console.log("on init");
        this.route.params.forEach((params : Params) => {
            let id : number = +params['id'];
            console.log(id);
        })
    }
}