import { Injectable } from "@nestjs/common";
import { Task } from "./interfaces/tasks.interface";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks(): Task[] {

        return this.tasks
    }

    createTask(task: any) {
        console.log(task);
        this.tasks.push(task);
        return task;
    }

    updateTask() {
        return "editar tarea";
    }

    deleteTask() {
        return "eliminar tareas";
    }

    updateTaskState() {
        return "actualizando estado";
    }

}