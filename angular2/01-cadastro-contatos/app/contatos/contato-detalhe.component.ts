import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { ContatoService } from "./contato.service";
import { Contato } from "./contato.model";

@Component({
    moduleId: module.id,
    selector: "contato-detalhe",
    templateUrl: "contato-detalhe.component.html"
})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        console.log("on init");
        this.contato = new Contato(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            console.log(id);

            if (id) {
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    })
            }

        })
    }

    teste(): void {
        console.log();
    }
}