import { Controller, Post, Body } from '@nestjs/common';
import { CategoryLocationService } from './category-location.service';
import { CreateCategoryLocationDto } from './dto/category-location.dto';

@Controller('category-locations')
export class CategoryLocationController {
    constructor(private readonly categoryLocationService: CategoryLocationService) { }

    @Post()
    create(@Body() createCategoryLocationDto: CreateCategoryLocationDto) {
        return this.categoryLocationService.create(createCategoryLocationDto);
    }
}