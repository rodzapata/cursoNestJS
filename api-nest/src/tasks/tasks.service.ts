import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./interfaces/tasks.interface";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks(): Task[] {

        return this.tasks
    }

    getTask(id: number): Task | undefined {
        console.log("parametro = ", id)
        const taskFound = this.tasks.find(task => task.id === id)

        if (!taskFound) {
           throw new NotFoundException(`Task with id ${id} not found`);
        }

        return taskFound;
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