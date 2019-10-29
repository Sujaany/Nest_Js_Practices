import { Injectable, NotFoundException } from '@nestjs/common';
import {Task, TaskStatus} from '../tasks/tasks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/createTaskDto';
import { GetTaskFilterDto } from './dto/getTaskFilterDto';

@Injectable()
export class TasksService {
    private tasks :Task[]= [];

getAllTasks():Task[]{
    return this.tasks;
}

getTasksWithFilters(filterDto:GetTaskFilterDto):Task[]{
    const {status,search} =filterDto;

    let tasks =this.getAllTasks();

    if(status){
        tasks=tasks.filter(task=>task.status === status);
    }
    if(search){
        tasks =tasks.filter(task =>
            task.title.includes(search) || 
            task.description.includes(search),
            )
    }
    return tasks;
}

getTaskById(id:string):Task{
    const found = this.tasks.find(task =>task.id ===id);

    if(!found){
        throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
}

createTasks(createTasksDto:CreateTaskDto):Task {
    const {title,description} =createTasksDto;

    const task : Task={
        id:uuid(),
        title,
        description,
        status:TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
}

deleteTask(id:string):void{
    const found = this.getTaskById(id);
    this.tasks=this.tasks.filter(task=>task.id !==found.id );
}

updateTaskStatus(id:string, status:TaskStatus):Task{
    const task = this.getTaskById(id);
    task.status =status;
    return task;
}

// updateTitle(id:string, title:string):Task{
//     const task = this.getTaskById(id);
//     task.title =title;
//     return task;
// }
}
