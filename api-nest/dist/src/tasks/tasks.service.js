"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    tasks = [];
    getTasks() {
        return this.tasks;
    }
    getTask(id) {
        console.log("parametro = ", id);
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
        return taskFound;
    }
    createTask(task) {
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
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map