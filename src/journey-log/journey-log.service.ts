import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJourneyLogDto } from './dto/journey-log.dto';

@Injectable()
export class JourneyLogService {
    constructor(private prisma: PrismaService) { }

    async create(userId: number, data: CreateJourneyLogDto) {
        return this.prisma.journeyLog.create({
            data: {
                ...data,
                userId,
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.journeyLog.findUnique({
            where: { id },
            include: { user: true, location: true },
        });
    }
}