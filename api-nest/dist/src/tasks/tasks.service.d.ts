import { Task } from "./interfaces/tasks.interface";
import { CreateTaskDto } from "./dto/create-task.dto";
export declare class TasksService {
    private tasks;
    getTasks(): Task[];
    getTask(id: number): Task | undefined;
    createTask(task: CreateTaskDto): CreateTaskDto;
    updateTask(): string;
    deleteTask(): string;
    updateTaskState(): string;
}
