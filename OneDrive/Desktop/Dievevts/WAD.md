# WAD - Web Application Document
## Plataforma de Eventos

## Introdução

A Plataforma de Eventos é uma aplicação web desenvolvida com Node.js e Express.js, seguindo o padrão arquitetural MVC (Model-View-Controller). O objetivo principal é fornecer uma plataforma onde usuários possam visualizar, criar e se inscrever em eventos.

Este documento (WAD) descreve a arquitetura, estrutura e componentes principais da aplicação, servindo como referência para desenvolvedores e stakeholders do projeto.

## Arquitetura do Sistema

### Visão Geral

A aplicação segue o padrão MVC, que separa a lógica de negócio da interface do usuário, permitindo desenvolvimento, teste e manutenção independentes de cada componente:

- **Model**: Representa os dados e a lógica de negócio da aplicação
- **View**: Responsável pela apresentação e interface com o usuário
- **Controller**: Gerencia as requisições do usuário, manipulando os modelos e selecionando as views apropriadas

### Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript), CSS, JavaScript
- **Banco de Dados**: MySQL com Sequelize ORM
- **Testes**: Jest

## Diagrama do Banco de Dados

### Modelo Entidade-Relacionamento

```
+---------------+       +---------------+       +-------------------+
|     Users     |       |    Events     |       |   Subscriptions   |
+---------------+       +---------------+       +-------------------+
| id (PK)       |       | id (PK)       |       | id (PK)           |
| name          |       | title         |       | user_id (FK)      |
| email         |       | description   |       | event_id (FK)     |
| password      |       | date          |       | subscription_date |
| created_at    |       | location      |       +-------------------+
+---------------+       | organizer_id  |
        |               | created_at    |
        |               +---------------+
        |                      |
        +----------------------+
                  |
                  v
        Relacionamentos:
        - Um usuário pode organizar muitos eventos (1:N)
        - Um usuário pode se inscrever em muitos eventos (N:M)
        - Um evento pode ter muitos usuários inscritos (N:M)
```

### Descrição das Tabelas

#### Tabela: users

| Campo      | Tipo         | Descrição                           |
|------------|--------------|-------------------------------------|
| id         | INT          | Identificador único (PK)            |
| name       | VARCHAR(255) | Nome completo do usuário            |
| email      | VARCHAR(255) | Email do usuário (único)            |
| password   | VARCHAR(255) | Senha do usuário (hash)             |
| created_at | DATETIME     | Data de criação do registro         |

#### Tabela: events

| Campo        | Tipo         | Descrição                           |
|--------------|--------------|-------------------------------------|
| id           | INT          | Identificador único (PK)            |
| title        | VARCHAR(255) | Título do evento                    |
| description  | TEXT         | Descrição detalhada do evento       |
| date         | DATETIME     | Data e hora do evento               |
| location     | VARCHAR(255) | Local do evento                     |
| organizer_id | INT          | ID do usuário organizador (FK)      |
| created_at   | DATETIME     | Data de criação do registro         |

#### Tabela: subscriptions

| Campo             | Tipo     | Descrição                           |
|-------------------|----------|-------------------------------------|
| id                | INT      | Identificador único (PK)            |
| user_id           | INT      | ID do usuário inscrito (FK)         |
| event_id          | INT      | ID do evento relacionado (FK)       |
| subscription_date | DATETIME | Data da inscrição                   |

## Estrutura de Diretórios

A aplicação segue uma estrutura de diretórios organizada para facilitar a manutenção e escalabilidade:

```
plataforma-eventos/
│
├── config/                # Arquivos de configuração
├── controllers/           # Lógica de controle das requisições
├── models/                # Definição de modelos de dados
├── routes/                # Definição das rotas do sistema
├── services/              # Serviços auxiliares do sistema
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
├── views/                 # Templates EJS
│   ├── home/              # Views da página inicial
│   ├── events/            # Views relacionadas a eventos
│   └── partials/          # Componentes parciais reutilizáveis
└── server.js              # Arquivo principal que inicializa o servidor
```

## Fluxo de Dados

### Fluxo Básico de Requisição

1. O usuário acessa uma URL no navegador
2. O Express roteia a requisição para o controlador apropriado
3. O controlador interage com os modelos para obter ou manipular dados
4. O controlador seleciona a view apropriada e passa os dados
5. A view renderiza o HTML com os dados recebidos
6. A resposta é enviada de volta ao navegador do usuário

### Exemplo de Fluxo: Visualização de Eventos

```
Usuário acessa /events
    ↓
Router direciona para HomeController.listEvents
    ↓
HomeController consulta o modelo Event
    ↓
Modelo Event retorna dados dos eventos
    ↓
HomeController renderiza a view events/list.ejs
    ↓
View é enviada ao navegador do usuário
```

## Considerações de Segurança

- Senhas armazenadas com hash (implementação futura)
- Validação de dados de entrada
- Proteção contra SQL Injection via ORM
- Autenticação e autorização (implementação futura)

## Plano de Implementação

### Fase 1 (Atual)
- Estrutura básica MVC
- Modelos de dados e relacionamentos
- Interface de visualização de eventos

### Fase 2 (Futura)
- Sistema de autenticação de usuários
- Funcionalidade de inscrição em eventos
- Painel administrativo

### Fase 3 (Futura)
- Notificações por e-mail
- Pagamentos para eventos pagos
- API para integração com outras plataformas

## Conclusão

A Plataforma de Eventos foi projetada seguindo boas práticas de desenvolvimento web, com uma arquitetura modular e escalável. A estrutura MVC facilita a manutenção e evolução do sistema, permitindo adicionar novas funcionalidades de forma organizada.

