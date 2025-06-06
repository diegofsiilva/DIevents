// tests/example.test.js
// Exemplo de teste unitário usando Jest

// Função simples para testar
function soma(a, b) {
    return a + b;
}

// Testes
describe('Testes básicos', () => {
    test('soma 1 + 2 deve retornar 3', () => {
        expect(soma(1, 2)).toBe(3);
    });
});

// Testes de modelos (simulados)
describe('Testes de modelos', () => {
    test('Modelo User deve ter propriedades corretas', () => {
        // Simulando um modelo User
        const user = {
            id: 1,
            name: 'Usuário Teste',
            email: 'teste@example.com',
            password: 'senha123'
        };
        
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('password');
    });
    
    test('Modelo Event deve ter propriedades corretas', () => {
        // Simulando um modelo Event
        const event = {
            id: 1,
            title: 'Evento Teste',
            description: 'Descrição do evento teste',
            date: new Date(),
            location: 'Local Teste',
            organizer_id: 1
        };
        
        expect(event).toHaveProperty('id');
        expect(event).toHaveProperty('title');
        expect(event).toHaveProperty('description');
        expect(event).toHaveProperty('date');
        expect(event).toHaveProperty('location');
        expect(event).toHaveProperty('organizer_id');
    });
});

