import { TasksService } from "./tasks.service";
export declare class TaskController {
    tasksService: TasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): string[];
}
