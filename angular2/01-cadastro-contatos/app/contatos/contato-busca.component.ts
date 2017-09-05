import { ContatoService } from './contato.service';
import { Router } from '@angular/router';
import { Contato } from './contato.model';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contato-busca',
  templateUrl: 'contato-busca.component.html',
  styles: [`
    .cursor-pointer:hover{
      cursor: pointer;
    }
  `]
})

export class ContatoBuscaComponent implements OnInit {

  contatos: Observable<Contato[]>;
  private termosDaBusca: Subject<string> = new Subject<string>();

  constructor(
    private contatoService : ContatoService,
    private router : Router
  ) { }

  ngOnInit(): void { 
    this.contatos = this.termosDaBusca
      .debounceTime(500) //aguarda tempo antes de realizar a chamada
      .distinctUntilChanged() //verifica a ultima busca realizada. Se for igual, não faz novamente
      .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
      .catch(err => {
        console.log(err);
        return Observable.of<Contato[]>([])
      });
  }

  search(termo: string): void {
    this.termosDaBusca.next(termo)
  }

  verDetalhe(contato : Contato): void{
    let link = ['contato/save', contato.id];
    this.router.navigate(link);
  }
}