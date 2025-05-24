
# Plataforma de Eventos MVC em Node.js com PostgreSQL

Este projeto é a **Plataforma de Eventos (DIEvents)**, uma aplicação web desenvolvida para organizar e gerenciar eventos, seguindo o padrão MVC (Model-View-Controller). Utiliza **Node.js** como backend, **PostgreSQL** como banco de dados relacional e **EJS** para renderização de interfaces.

---

## Descrição do Sistema

A Plataforma de Eventos (DIEvents) é uma solução web que simplifica a criação, gerenciamento e participação em eventos. Desenvolvida como projeto da Ponderada do INTELI, a aplicação permite que:

- Organizadores cadastrem eventos com título, data, local, etc.
- Participantes busquem eventos e se inscrevam.

O sistema segue o padrão **MVC** para garantir uma estrutura organizada, com o backend gerenciando a lógica e o banco de dados, e o frontend (ainda em desenvolvimento) oferecendo uma interface amigável renderizada com EJS.

---

## Funcionalidades Principais

- Cadastro e autenticação de usuários
- Criação, edição e exclusão de eventos
- Busca e inscrição em eventos
- Notificações de confirmação de inscrição
- Interface responsiva para desktop e mobile

---

## Requisitos

- Node.js (versão `22.13.1`)
- PostgreSQL (versão `17.0.0`)

---

## Instalação

### 1. Clonar o repositório:

```bash
git clone https://github.com/diegofsiilva/DIevents.git
cd DIevents
```

### 2. Instalar as dependências:

```bash
npm init -y
npm install express
```

### 3. Configurar o arquivo `.env`:

Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=dievents
DB_PORT=5432
```

---

##  Configuração do Banco de Dados

### Criar banco de dados:

Crie um banco de dados PostgreSQL com o nome especificado no seu `.env`.

### Executar o script SQL de inicialização:

```bash
npm run init-db
```

Este comando criará as tabelas `usuario`, `ingresso`, `eventos` e `notificações` com `UUID` como chave primária e inserirá registros de exemplo.

---

##  Como Executar o Projeto Localmente

```bash
npm start
```

ou

```bash
node app.js
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Estrutura de Diretórios

```
meu-projeto/
├── assets/                  # Arquivos públicos (imagens, ícones)
│   ├── favicon.ico
│   ├── modele-banco.png
│   └── mvc-diagram.png
├── config/                  # Configurações do sistema
│   └── db.js
├── controllers/             # Controladores (lógica das rotas)
│   ├── alunoController.js
│   ├── cursoController.js
│   ├── professorController.js
│   ├── TarefaController.js
│   └── userController.js
├── models/                  # Modelos de dados
│   ├── alunos.js
│   ├── curso.js
│   ├── professor.js
│   └── userModel.js
├── routes/                  # Rotas da aplicação
│   ├── alunos.js
│   ├── curso.js
│   ├── frontRouter.js
│   ├── index.js
│   ├── professores.js
│   └── userRoutes.js
├── scripts/                 # Scripts SQL e inicialização
│   ├── init.sql
│   └── runSQLScript.js
├── services/                # Serviços auxiliares
│   └── userService.js
├── tests/                   # Testes unitários
│   ├── userController.js
│   ├── userModel.test.js
│   ├── userRoutes.test.js
│   └── userService.test.js
├── views/                   # Views renderizadas com EJS
│   ├── alunos/
│   │   └── index.ejs
│   ├── components/
│   │   └── header.ejs
│   ├── css/
│   │   └── styles.css
│   ├── layout/
│   │   └── main.ejs
│   └── pages/
│       ├── page1.ejs
│       └── page2.ejs
├── .env_example             # Exemplo de configuração do .env
├── .gitignore               # Ignora arquivos no Git (ex: node_modules)
├── app.js                   # Inicialização do servidor Node.js
├── jest.config.js           # Configuração de testes com Jest
├── package-lock.json        # Lockfile do npm
├── package.json             # Arquivo de dependências e scripts
├── readme.md                # Documentação principal do projeto
├── rest.http                # Testes de endpoints (opcional)
└── wad.md                   # Documento de especificação da aplicação
```

---

## Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

## Licença

Este projeto está licenciado sob a **Licença MIT**.

---

> Este `README.md` fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença.  
> Sinta-se livre para personalizar conforme o seu projeto evolui.
