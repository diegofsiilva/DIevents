// main.js - Script principal da aplicação

document.addEventListener('DOMContentLoaded', function() {
    console.log('Plataforma de Eventos carregada com sucesso!');
    
    // Botão de inscrição em eventos
    const subscribeButtons = document.querySelectorAll('.btn-primary');
    
    subscribeButtons.forEach(button => {
        if (button.textContent === 'Inscrever-se') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Funcionalidade de inscrição será implementada em breve!');
            });
        }
    });
});

