import { TarefaController } from "../controllers/todolist.controller";
import { Router } from "express";

export const router = Router();

router.post('/criar-tarefa', TarefaController.criarTarefa);
router.get('/buscar-tarefas', TarefaController.buscarTarefas);
router.get('/tarefa-unica/:id', TarefaController.buscarTarefaUnica);
router.put('/editar-tarefa/:id', TarefaController.editarTarefa);
router.patch('/concluir-tarefa/:id', TarefaController.concluirTarefa);
router.delete('/excluir-tarefa/:id', TarefaController.excluirTarefaUnica);
router.delete('/excluir-tarefas', TarefaController.excluirTarefas);

