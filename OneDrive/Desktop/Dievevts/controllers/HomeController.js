// HomeController.js
// Controlador responsável pelas páginas principais da aplicação

const HomeController = {
    // Renderiza a página inicial
    index: (req, res) => {
        res.render('home/index', {
            title: 'Plataforma de Eventos',
            events: [] // Será substituído por dados do banco
        });
    },

    // Lista todos os eventos
    listEvents: (req, res) => {
        // Simulando dados de eventos (será substituído por consulta ao banco)
        const events = [
            { id: 1, title: 'Workshop de Node.js', date: '2025-06-15', location: 'São Paulo' },
            { id: 2, title: 'Conferência de JavaScript', date: '2025-07-10', location: 'Rio de Janeiro' },
            { id: 3, title: 'Meetup de Express', date: '2025-06-25', location: 'Belo Horizonte' }
        ];

        res.render('events/list', {
            title: 'Lista de Eventos',
            events: events
        });
    },

    // Exibe detalhes de um evento específico
    showEvent: (req, res) => {
        const eventId = req.params.id;
        
        // Simulando busca de evento por ID (será substituído por consulta ao banco)
        const event = {
            id: eventId,
            title: `Evento ${eventId}`,
            description: 'Descrição detalhada do evento...',
            date: '2025-06-20',
            location: 'São Paulo',
            organizer: 'Organizador Exemplo'
        };

        res.render('events/show', {
            title: event.title,
            event: event
        });
    }
};

module.exports = HomeController;

