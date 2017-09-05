import { ContatoService } from './contato.service';
import { Router } from '@angular/router';
import { Contato } from './contato.model';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import { Component, EventEmitter, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contato-busca',
  templateUrl: 'contato-busca.component.html',
  styles: [`
    .cursor-pointer:hover{
      cursor: pointer;
    }
  `],
  // inputs : [
  //   'busca:mySearch' //propertyName: alias
  // ],
  // outputs : [
  //   'busca:mySearch' //propertyName: alias
  // ]
})

export class ContatoBuscaComponent implements OnInit, OnChanges {

  @Input() busca : string;
  @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();

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
  
  ngOnChanges(changes: SimpleChanges): void{
    let busca: SimpleChange = changes['busca'];
    this.search(busca.currentValue);
  }

  search(termo: string): void {
    this.termosDaBusca.next(termo);
    this.buscaChange.emit(termo);
  }

  verDetalhe(contato : Contato): void{
    let link = ['contato/save', contato.id];
    this.router.navigate(link);
  }
}