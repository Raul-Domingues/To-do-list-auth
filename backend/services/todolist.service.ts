import { pool } from '../config/db';

export class TarefasService {

    static async buscarTarefas() {
        try {
            const result = await pool.query('SELECT * FROM tarefas')
            return result.rows;
        } catch (error) {
            console.error(error);
        }
    }
    
    static async criarTarefa(titulo: string, descricao: string) {
        try {
            await pool.query('INSERT INTO tarefas (titulo, descricao) VALUES ($1, $2)', [titulo, descricao]);
        } catch (error) {
            console.error(error);
        }
    }

    static async buscarTarefaUnica (id: number) {
        try {
            const result = await pool.query('SELECT * FROM tarefas WHERE id = $1', [id])
            return result.rows[0];
        } catch (error) {
            console.log(error)
        }
    }

    static async editarTarefa(id: number, titulo: string, descricao: string, concluida: boolean) {
        try {
            await pool.query('UPDATE tarefas SET titulo = $1, descricao = $2, concluida = $3 WHERE id = $4', [titulo, descricao, concluida, id])
            console.log('Tarefa editada com sucesso!');
        } catch(error) {
            console.error(error);
        }
    }

    static async concluirTarefa(id: number, concluida: boolean) {
        try {
            await pool.query('UPDATE tarefas SET concluida = $1 WHERE id = $2', [concluida, id])
            console.log('Tarefa concluida com sucesso!');
        } catch(error) {
            console.log('Erro ao concluir uma tarefa!')
        }
    }

    static async excluirTarefaUnica(id: number) {
        try {
            await pool.query('DELETE from tarefas WHERE id = $1', [id])
            console.log('Tarefa excluida com sucesso!');
        } catch(error) {
            console.error(error);
        }
    }

    static async excluirTarefas() {
        try {
            await pool.query('DELETE FROM tarefas');
            console.log('Tarefas excluidas com sucesso!');
        } catch(error) {
            console.error(error);
        }
    }
}