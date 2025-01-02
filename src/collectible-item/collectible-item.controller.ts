import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CollectibleItemService } from './collectible-item.service';
import { CreateCollectibleItemDto } from './dto';

@Controller('collectible-items')
export class CollectibleItemController {
    constructor(private readonly collectibleItemService: CollectibleItemService) { }

    @Post()
    create(@Body() createCollectibleItemDto: CreateCollectibleItemDto) {
        return this.collectibleItemService.create(createCollectibleItemDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.collectibleItemService.findOne(+id);
    }
}