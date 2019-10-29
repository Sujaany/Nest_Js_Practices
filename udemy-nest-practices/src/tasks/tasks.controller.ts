import { Controller, Get, Post, Body, Param, Delete, Patch, Query,UsePipes,ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/createTaskDto';
import { filter } from 'minimatch';
import { GetTaskFilterDto } from './dto/getTaskFilterDto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}

    @Get()
    getTasks(@Query() filterDto:GetTaskFilterDto):Task[]{
        // console.log(filterDto)
        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto);
        } else {
            return this.tasksService.getAllTasks();
        }    
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string){
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTasks(@Body() createTaskDto:CreateTaskDto):Task{
        return this.tasksService.createTasks(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string):void{
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param ('id') id:string,
        @Body ('status') status :TaskStatus,
    ):Task{
        return this.tasksService.updateTaskStatus(id,status)
    }

    // @Patch('/:id/title')
    // updateTitle(
    //     @Param ('id') id:string,
    //     @Body ('title') title:string,
    // ):Task{
    //     return this.tasksService.updateTitle(id,title)
    // }
}
 