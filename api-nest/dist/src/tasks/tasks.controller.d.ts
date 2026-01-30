import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(query: any): import("./interfaces/tasks.interface").Task[];
    getTask(id: string): import("./interfaces/tasks.interface").Task | undefined;
    createTasks(task: CreateTaskDto): CreateTaskDto;
    updateTasks(): string;
    deleteTasks(): string;
    updateTasksState(): string;
}
