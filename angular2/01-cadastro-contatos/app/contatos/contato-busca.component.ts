import { ContatoService } from './contato.service';
import { Contato } from './contato.model';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contato-busca',
  templateUrl: 'contato-busca.component.html'
})

export class ContatoBuscaComponent implements OnInit {

  contatos: Observable<Contato[]>;
  private termosDaBusca: Subject<string> = new Subject<string>();

  constructor(
    private contatoService : ContatoService
  ) { }

  ngOnInit(): void { 
    this.contatos = this.termosDaBusca
      .debounceTime(500) //aguarda tempo antes de realizar a chamada
      .distinctUntilChanged() //verifica a ultima busca realizada. Se for igual, não faz novamente
      .switchMap(term => {
        console.log("Fez a busca: ", term);
        return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
      });

    this.contatos.subscribe((contatos : Contato[]) => {
      console.log("retornou do servidor: ", contatos);
      
    })
  }

  search(termo: string): void {
    this.termosDaBusca.next(termo)
  }
}