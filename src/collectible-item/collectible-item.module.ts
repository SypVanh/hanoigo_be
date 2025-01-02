import { Module } from '@nestjs/common';
import { CollectibleItemController } from './collectible-item.controller';
import { CollectibleItemService } from './collectible-item.service';

@Module({
    controllers: [CollectibleItemController],
    providers: [CollectibleItemService],
})
export class CollectibleItemModule { }
