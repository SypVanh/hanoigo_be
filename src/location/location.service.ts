import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateLocationDto) {
        return this.prisma.location.create({
            data,
        });
    }

    async findOne(id: number) {
        return this.prisma.location.findUnique({
            where: { id },
            include: { comments: true, journeyLogs: true, markers: true, tasks: true, images: true },
        });
    }
}