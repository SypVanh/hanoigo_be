import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LocationImageService } from './location-image.service';
import { CreateLocationImageDto } from './dto/location-image.dto';

@Controller('location-images')
export class LocationImageController {
    constructor(private readonly locationImageService: LocationImageService) { }

    @Post()
    create(@Body() createLocationImageDto: CreateLocationImageDto) {
        return this.locationImageService.create(createLocationImageDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.locationImageService.findOne(+id);
    }
}