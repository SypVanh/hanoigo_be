import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationController {
    constructor(private readonly locationService: LocationService) { }

    @Post()
    create(@Body() createLocationDto: CreateLocationDto) {
        return this.locationService.create(createLocationDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.locationService.findOne(+id);
    }
}