"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Seu madruga', email: 'email@email.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Kiko', email: 'kiko@email.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Chaves', email: 'chaves@email.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Chiquinha', email: 'chiquinha@email.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Sr. Barriga', email: 'barriga@email.com', telefone: '(00) 0000-0000' }
        ];
        return contatos;
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map