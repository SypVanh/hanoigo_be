import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MarkerService } from './marker.service';
import { CreateMarkerDto } from './dto/marker.dto';

@Controller('markers')
export class MarkerController {
    constructor(private readonly markerService: MarkerService) { }

    @Post()
    create(@Body() createMarkerDto: CreateMarkerDto) {
        return this.markerService.create(createMarkerDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.markerService.findOne(+id);
    }
}