import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCategoryDto) {
        return this.prisma.category.create({
            data,
        });
    }

    async findOne(id: number) {
        return this.prisma.category.findUnique({
            where: { id },
            include: { locations: true },
        });
    }
}
