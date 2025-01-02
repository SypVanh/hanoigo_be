import { Controller, Post, Body } from '@nestjs/common';
import { CollectionCollectibleItemService } from './collection-collectible-item.service';
import { CreateCollectionCollectibleItemDto } from './dto';

@Controller('collection-collectible-items')
export class CollectionCollectibleItemController {
    constructor(private readonly collectionCollectibleItemService: CollectionCollectibleItemService) { }

    @Post()
    create(@Body() createCollectionCollectibleItemDto: CreateCollectionCollectibleItemDto) {
        return this.collectionCollectibleItemService.create(createCollectionCollectibleItemDto);
    }
}