import { Controller, Get, Post, Put, Delete, Patch, Body } from "@nestjs/common";
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
    createTasks(@Body() task: any) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTasks() {
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTasksState() {
        return this.tasksService.updateTaskState();
    }
}