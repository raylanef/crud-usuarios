CREATE DATABASE cadastro;

USE cadastro;

CREATE TABLE usuarios(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
idade CHAR(3),
cep VARCHAR(8),
bairro VARCHAR(100),
localidade VARCHAR(100),
uf VARCHAR(2) 
);