"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const contato_service_1 = require("./contato.service");
const observable_1 = require("rxjs/observable");
const subject_1 = require("rxjs/subject");
const core_1 = require("@angular/core");
let ContatoBuscaComponent = class ContatoBuscaComponent {
    constructor(contatoService) {
        this.contatoService = contatoService;
        this.termosDaBusca = new subject_1.Subject();
    }
    ngOnInit() {
        this.contatos = this.termosDaBusca
            .debounceTime(500) //aguarda tempo antes de realizar a chamada
            .distinctUntilChanged() //verifica a ultima busca realizada. Se for igual, não faz novamente
            .switchMap(term => {
            console.log("Fez a busca: ", term);
            return term ? this.contatoService.search(term) : observable_1.Observable.of([]);
        }).catch(err => {
            console.log(err);
            return observable_1.Observable.of([]);
        });
        this.contatos.subscribe((contatos) => {
            console.log("retornou do servidor: ", contatos);
        });
    }
    search(termo) {
        this.termosDaBusca.next(termo);
    }
};
ContatoBuscaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contato-busca',
        templateUrl: 'contato-busca.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService])
], ContatoBuscaComponent);
exports.ContatoBuscaComponent = ContatoBuscaComponent;
//# sourceMappingURL=contato-busca.component.js.map