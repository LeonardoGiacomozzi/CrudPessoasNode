import {fastify} from 'fastify'
import {PessoasService} from './Services/pessoasService.js'



const server = fastify();
const pessoasService = new PessoasService()
server.post('/pessoas',async (req,reply)=>
{
    const pessoa = req.body
    await pessoasService.post(pessoa);
    return reply.status(201).send('Cadastro')
})
server.patch('/pessoas/:id',async (req,reply)=>
{   
    const id =req.params.id
    const profissao = req.body.profissao
    await pessoasService.patch(id,profissao)
    return reply.status(204).send()
})
server.get('/pessoas',async (req,)=>
{
    const profissao = req.query.profissao
    const pessoas = await pessoasService.getAll(profissao)
    return pessoas
})
server.delete('/pessoas/:id',async (req,reply)=>
{
    const id =req.params.id
    await pessoasService.delete(id)
    return reply.status(204).send()
})
server.listen({
    port:3000,
})