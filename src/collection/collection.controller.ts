import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto';
import { GetUser } from 'src/auth/decorator';
import { MyJwtGuard } from 'src/auth/guard';

@UseGuards(MyJwtGuard)
@Controller('collections')
export class CollectionController {
    constructor(private collectionService: CollectionService) { }

    @Post()
    create(
        @GetUser('id') userId: number,
        @Body() createCollectionDto: CreateCollectionDto) {
        return this.collectionService.create(userId, createCollectionDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.collectionService.findOne(+id);
    }
}
