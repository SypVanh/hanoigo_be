import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryLocationDto } from './dto/category-location.dto';

@Injectable()
export class CategoryLocationService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCategoryLocationDto) {
        try {
            // Kiểm tra xem CategoryLocation đã tồn tại chưa
            const existingItem = await this.prisma.categoryLocation.findUnique({
                where: {
                    locationId_categoryId: {
                        locationId: data.locationId,
                        categoryId: data.categoryId,
                    },
                },
            });

            if (existingItem) {
                // Nếu đã tồn tại, trả về CategoryLocation hiện tại
                return existingItem;
            }

            // Nếu chưa tồn tại, tạo mới CategoryLocation
            return await this.prisma.categoryLocation.create({
                data,
            });
        } catch (error) {
            // Xử lý lỗi tại đây
            throw new Error(`Failed to create CategoryLocation: ${error.message}`);
        }
    }
}