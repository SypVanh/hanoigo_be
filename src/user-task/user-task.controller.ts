import { Controller, Post, Body } from '@nestjs/common';
import { UserTaskService } from './user-task.service';
import { CreateUserTaskDto } from './dto/user-task.dto';

@Controller('user-tasks')
export class UserTaskController {
    constructor(private readonly userTaskService: UserTaskService) { }

    @Post()
    create(@Body() createUserTaskDto: CreateUserTaskDto) {
        return this.userTaskService.create(createUserTaskDto);
    }
}