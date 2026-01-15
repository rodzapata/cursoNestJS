import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {

    }

    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get("/:id")
    getTask(@Param("id") id: string) {
        console.log(id);
        return this.tasksService.getTask(parseInt(id));

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