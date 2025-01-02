import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollectionCollectibleItemDto } from './dto';

@Injectable()
export class CollectionCollectibleItemService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCollectionCollectibleItemDto) {
        try {
            const existingItem = await this.prisma.collectionCollectibleItem.findUnique({
                where: {
                    collectionId_collectibleItemId: {
                        collectionId: data.collectionId,
                        collectibleItemId: data.collectibleItemId,
                    },
                },
            });

            if (existingItem) {
                return existingItem;
            }

            return await this.prisma.collectionCollectibleItem.create({
                data,
            });
        } catch (error) {
            throw new Error(`Failed to create CollectionCollectibleItem: ${error.message}`);
        }
    }
}
