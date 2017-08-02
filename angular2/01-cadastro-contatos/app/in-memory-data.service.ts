import { InMemoryDbService } from "angular-in-memory-web-api";
import { Contato } from "./contatos/contato.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() : {} {
        let contatos: Contato[] = [
            { id: 1, nome: 'Seu madruga', email: 'email@email.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Kiko', email: 'kiko@email.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Chaves', email: 'chaves@email.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Chiquinha', email: 'chiquinha@email.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Sr. Barriga', email: 'barriga@email.com', telefone: '(00) 0000-0000' }
        ];

        let carros : any[] = [
            {id : 1, descricao : "Camaro"},
            {id : 2, descricao : "Mustang"}
        ];

        return {
            'contatos' : contatos,
            'carros' : carros
        };        
    }
}