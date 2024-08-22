import { TarefasService } from '../services/todolist.service';
import { Request, Response } from 'express';

export class TarefaController {

    static async buscarTarefas (req: Request, res: Response) {
        try {
            const tarefas = await TarefasService.buscarTarefas();
            res.status(200).send(tarefas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar tarefas' });
        }
    }

    static async criarTarefa (req: Request, res: Response) {
        const { titulo, descricao } = req.body;
        try {
            await TarefasService.criarTarefa(titulo, descricao);
            res.status(201).json({ message: 'Tarefa criada com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar tarefa' });
        }
    }

    static async buscarTarefaUnica(req: Request, res: Response){
        const id = req.params.id;
        try {
            const tarefa = await TarefasService.buscarTarefaUnica(JSON.parse(id))
            res.status(200).send(tarefa);
        } catch (error) {
            console.log(error)
        }
    }

    static async editarTarefa(req: Request, res: Response) {
        const id = req.params.id
        const { titulo, descricao, concluida } = req.body;
        try {
            await TarefasService.editarTarefa(JSON.parse(id), titulo, descricao, concluida);
            res.send('Tarefa editada com sucesso!');
        } catch(error) {
            console.error(error);
        }
    }

    static async concluirTarefa(req: Request, res: Response) {
        const id = req.params.id;
        const { concluida } = req.body;
        try {
            await TarefasService.concluirTarefa(JSON.parse(id), concluida)
            res.send('Tarefa concluida com sucesso!');
        } catch(error) {
            console.error(error)
        }
    }

    static async excluirTarefaUnica(req: Request, res: Response) {
        const id = req.params.id
        try {
            await TarefasService.excluirTarefaUnica(JSON.parse(id));
            res.send('Tarefa excluida com sucesso!');
        } catch(error) {    
            console.error(error);
        }
    }

    static async excluirTarefas(req: Request, res: Response) {
        try {
            await TarefasService.excluirTarefas()
            res.send('Tarefas excluidas com sucesso!');
        } catch(error) {
            console.error(error);
        }
    }
}