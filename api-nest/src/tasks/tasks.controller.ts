import { Controller, Get, Post,Put,Delete,Patch } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {

    }

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Post()
    createTasks(){
        return this.tasksService.createTasks();
    }

    @Put()
    updateTasks(){
        return this.tasksService.updateTasks();
    }

    @Delete()
    deleteTasks(){
        return this.tasksService.deleteTasks();
    }

    @Patch()
    updateTasksState(){
        return this.tasksService.updateTasksState();
    }
}