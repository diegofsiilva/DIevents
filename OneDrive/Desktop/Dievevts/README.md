# Plataforma de Eventos

Uma aplicação web para gerenciamento de eventos, permitindo que usuários possam criar, visualizar e se inscrever em eventos.

## Descrição do Sistema

A Plataforma de Eventos é um sistema web desenvolvido com Node.js e Express.js, utilizando o padrão MVC (Model-View-Controller) para organização do código. O sistema permite:

- Visualização de eventos disponíveis
- Detalhes de cada evento
- Inscrição em eventos (simulado)
- Gerenciamento de usuários e eventos

O frontend foi desenvolvido utilizando EJS (Embedded JavaScript) como engine de templates, proporcionando uma interface responsiva e amigável.

## Estrutura de Pastas e Arquivos

```
plataforma-eventos/
│
├── config/                # Arquivos de configuração
│   └── database.js        # Configuração da conexão com o banco de dados
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js  # Controlador para as páginas principais
├── models/                # Definição de modelos de dados
│   ├── User.js            # Modelo de usuário
│   ├── Event.js           # Modelo de evento
│   ├── Subscription.js    # Modelo de inscrição
│   └── index.js           # Exportação e associações dos modelos
├── routes/                # Definição das rotas do sistema
│   └── index.js           # Rotas principais da aplicação
├── services/              # Serviços auxiliares do sistema
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
│   └── main.js            # Script principal do frontend
├── styles/                # Arquivos CSS públicos
│   └── main.css           # Estilos principais da aplicação
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js    # Exemplo de teste unitário
├── views/                 # Templates EJS
│   ├── home/              # Views da página inicial
│   │   └── index.ejs      # Página inicial
│   ├── events/            # Views relacionadas a eventos
│   │   ├── list.ejs       # Lista de eventos
│   │   └── show.ejs       # Detalhes de um evento
│   └── partials/          # Componentes parciais reutilizáveis
│       ├── header.ejs     # Cabeçalho das páginas
│       └── footer.ejs     # Rodapé das páginas
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package.json           # Gerenciador de dependências do Node.js
├── README.md              # Documentação do projeto
├── WAD.md                 # Documentação WAD (Web Application Document)
└── server.js              # Arquivo principal que inicializa o servidor
```

### Entidades e Modelo de Banco de Dados

#### Entidades Principais:

*   **Usuários (Users):** Representa os usuários da plataforma.
*   **Eventos (Events):** Representa os eventos que serão cadastrados na plataforma.
*   **Inscrições (Subscriptions):** Representa a relação entre usuários e eventos, ou seja, as inscrições dos usuários nos eventos.

#### Modelo Lógico e Físico (Exemplo):

```sql
-- Tabela de Usuários
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Eventos
CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATETIME NOT NULL,
    location VARCHAR(255),
    organizer_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (organizer_id) REFERENCES users(id)
);

-- Tabela de Inscrições
CREATE TABLE subscriptions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    subscription_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (event_id) REFERENCES events(id),
    UNIQUE (user_id, event_id) -- Garante que um usuário só pode se inscrever uma vez em um evento
);
```

## Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (v14 ou superior)
- MySQL (v5.7 ou superior)

### Passos para Execução

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/plataforma-eventos.git
   cd plataforma-eventos
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações de banco de dados.

4. Crie o banco de dados:
   ```
   CREATE DATABASE eventos_db;
   ```

5. Inicie o servidor:
   ```
   npm start
   ```

6. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, CSS, JavaScript
- **Banco de Dados**: MySQL, Sequelize ORM
- **Testes**: Jest

## Funcionalidades Implementadas

- Visualização de lista de eventos
- Visualização de detalhes de eventos
- Interface responsiva para dispositivos móveis e desktop
- Estrutura MVC completa
- Modelos de dados com relacionamentos

## Próximos Passos

- Implementação de autenticação de usuários
- Funcionalidade de inscrição em eventos
- Painel administrativo para gerenciamento de eventos
- Notificações por e-mail

## Autor

Desenvolvido como projeto individual para demonstração de habilidades em desenvolvimento web com Node.js, Express e EJS.

