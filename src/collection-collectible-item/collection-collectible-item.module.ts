import { Module } from '@nestjs/common';
import { CollectionCollectibleItemController } from './collection-collectible-item.controller';
import { CollectionCollectibleItemService } from './collection-collectible-item.service';

@Module({
  controllers: [CollectionCollectibleItemController],
  providers: [CollectionCollectibleItemService],
})
export class CollectionCollectibleItemModule { }
