import {sql} from './db.js'

sql`DROP TABLE IF EXISTS pessoas`.then(()=>{console.log('Removendo Tabela pessoas antiga')})

sql`
CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    dataNascimento DATE,
    profissao VARCHAR(255)
);
`.then(()=>{
console.log('Criada Tabela Pessoas')
})