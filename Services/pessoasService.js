import {sql} from './../Banco/db.js'

export class PessoasService{

    async getAll(profissao)
    {
        let pessoas
        if(profissao)
        {
            pessoas = await sql`SELECT * FROM pessoas where profissao ilike ${'%'+profissao+'%'}` 
        }
        else
        {
            pessoas = await sql`SELECT * FROM pessoas`
        }
        
        return pessoas
    }

    async post(pessoa)
    {
        const {nome,profissao,dataNascimento} = pessoa
        if(!nome)
        {
            throw new Error("O campo nome é obrigatório")
        }
        if(!dataNascimento)
        {
            throw new Error("O campo data nascimento é obrigatório")
        }

        await sql `INSERT INTO pessoas (nome,dataNascimento,profissao) VALUES (${nome},${dataNascimento},${profissao})`
    }

    async patch(id,profissao)
    {
        await sql`UPDATE pessoas SET profissao = ${profissao} WHERE id=${id}`
    }

    async delete(id)
    {
        await sql`DELETE FROM pessoas WHERE id=${id}`
    }
}