import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {

    getTasks() {
        return ["task1", "task2", "task3"]
    }
    
    createTasks(){
        return "create tasks" ;
    }

    updateTasks(){
        return "editar tarea";
    }

    deleteTasks(){
        return "eliminar tareas" ;
    }

    updateTasksState(){
        return "actualizando estado" ;
    }


}