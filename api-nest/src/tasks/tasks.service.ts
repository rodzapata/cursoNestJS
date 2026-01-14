import { Injectable } from "@nestjs/common";

export interface Task {
    id: number,
    description: string,
    state: boolean
}


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks(): Task[] {

        return this.tasks
    }

    createTask(task: any) {
        console.log(task);
        this.tasks.push(task);
        return this.tasks;
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