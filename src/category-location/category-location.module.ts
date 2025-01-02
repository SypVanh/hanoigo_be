import { Module } from '@nestjs/common';
import { CategoryLocationController } from './category-location.controller';
import { CategoryLocationService } from './category-location.service';


@Module({
    controllers: [CategoryLocationController],
    providers: [CategoryLocationService],
})
export class CategoryLocationModule { }
