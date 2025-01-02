import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollectibleItemDto } from './dto/collectible-item.dto';

@Injectable()
export class CollectibleItemService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCollectibleItemDto) {
        return this.prisma.collectibleItem.create({
            data,
        });
    }

    async findOne(id: number) {
        return this.prisma.collectibleItem.findUnique({
            where: { id },
            include: { collections: true },
        });
    }
}