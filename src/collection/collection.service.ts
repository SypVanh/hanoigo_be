import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollectionDto } from './dto/collection.dto';

@Injectable()
export class CollectionService {
    constructor(private prisma: PrismaService) { }
    async create(userId: number, data: CreateCollectionDto) {
        const existingCollection = await this.prisma.collection.findUnique({
            where: { userId },
        });

        if (existingCollection) {
            return existingCollection;
        }

        return this.prisma.collection.create({
            data: {
                ...data,
                userId,
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.collection.findUnique({
            where: { id },
            include: { collectibleItems: true },
        });
    }
}