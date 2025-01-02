import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) { }

    async create(userId: number, data: CreateCommentDto) {
        return this.prisma.comment.create({
            data: {
                ...data,
                userId,
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.comment.findUnique({
            where: { id },
            include: { user: true, location: true },
        });
    }
}