import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationImageDto } from './dto/location-image.dto';

@Injectable()
export class LocationImageService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateLocationImageDto) {
        return this.prisma.locationImage.create({
            data,
        });
    }

    async findOne(id: number) {
        return this.prisma.locationImage.findUnique({
            where: { id },
            include: { location: true },
        });
    }
}