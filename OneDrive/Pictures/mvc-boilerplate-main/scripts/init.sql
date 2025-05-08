CREATE TABLE usuario (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    cpf VARCHAR(20),
    email VARCHAR(255),
    data_nascimento DATETIME
);

CREATE TABLE notificacao (
    id INTEGER PRIMARY KEY,
    nomeEventoID INTEGER,
    userID INTEGER,
    precoID DECIMAL(10,2),
    transacao VARCHAR(50),
    FOREIGN KEY (userID) REFERENCES usuario(id),
    FOREIGN KEY (nomeEventoID) REFERENCES eventos(id)
);

CREATE TABLE ingresso (
    id INTEGER PRIMARY KEY,
    eventoID INTEGER,
    userID INTEGER,
    tipo VARCHAR(50),
    valor DECIMAL(10,2),
    status VARCHAR(50),
    FOREIGN KEY (userID) REFERENCES usuario(id),
    FOREIGN KEY (eventoID) REFERENCES eventos(id)
);

CREATE TABLE eventos (
    id INTEGER PRIMARY KEY,
    nomeEvento VARCHAR(255),
    localizacao VARCHAR(255),
    horario TIMESTAMP
);