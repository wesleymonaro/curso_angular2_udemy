import { Component, OnInit } from "@angular/core";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { DialogService } from "../dialog.service";

@Component({
  moduleId: module.id,
  selector: 'contatos-lista',
  templateUrl: 'contatos-lista.component.html',
  // providers : [ContatoService]
})
export class ContatosListaComponent implements OnInit {
  contatos: Contato[] = [];
  mensagem: {};
  classesCSS: {};
  private currentTimeout: any;

  constructor(
    private contatoService: ContatoService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.contatoService.getContatos()
      .then((contatos: Contato[]) => {
        this.contatos = contatos;
      }).catch(err => {
        console.log("Aconteceu um erro: ", err);
        this.mostrarMensaem({
          tipo: 'danger',
          texto: 'Ocorreu um erro ao buscar a lista de contatos!'
        })
      });
  }

  onDelete(contato: Contato): void {
    this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + '?')
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.contatoService.delete(contato)
            .then(() => {

              this.contatos = this.contatos.filter(c => c.id != contato.id);

              this.mostrarMensaem({
                tipo: 'success',
                texto: 'Contato Deletado!'
              })

            }).catch((err) => {
              console.log(err)

              this.mostrarMensaem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao deletar o contato!'
              })

            });
        }
      })

  }

  private mostrarMensaem(mensagem: { tipo: string, texto: string }): void {
    this.mensagem = mensagem;
    this.montarClasses(mensagem.tipo);
    if (mensagem.tipo != 'danger') {

      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
      }

      this.currentTimeout = setTimeout(() => {
        this.mensagem = undefined;
      }, 3000);
    }
  }


  private montarClasses(tipo: string): void {
    this.classesCSS = {
      'alert': true,
    };

    this.classesCSS['alert-' + tipo] = true;
  }
}