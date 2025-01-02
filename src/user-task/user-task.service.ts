import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserTaskDto } from './dto/user-task.dto';

@Injectable()
export class UserTaskService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserTaskDto) {
        try {
            const existingItem = await this.prisma.userTask.findUnique({
                where: {
                    userId_taskId: {
                        userId: data.userId,
                        taskId: data.taskId,
                    },
                },
            });

            if (existingItem) {
                return existingItem;
            }

            return await this.prisma.userTask.create({
                data,
            });
        } catch (error) {
            throw new Error(`Failed to create UserTask: ${error.message}`);
        }
    }
}