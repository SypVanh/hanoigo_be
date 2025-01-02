import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMarkerDto } from './dto/marker.dto';

@Injectable()
export class MarkerService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateMarkerDto) {
        return this.prisma.marker.create({
            data,
        });
    }

    async findOne(id: number) {
        return this.prisma.marker.findUnique({
            where: { id },
            include: { location: true, collectibleItem: true },
        });
    }
}