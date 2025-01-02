import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateTaskDto) {
        return this.prisma.task.create({
            data,
        });
    }

    async findOne(id: number) {
        return this.prisma.task.findUnique({
            where: { id },
            include: { location: true, users: true, collectibleItem: true },
        });
    }
}