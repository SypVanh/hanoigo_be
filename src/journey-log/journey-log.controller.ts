import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { JourneyLogService } from './journey-log.service';
import { CreateJourneyLogDto } from './dto/journey-log.dto';
import { MyJwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(MyJwtGuard)
@Controller('journey-logs')
export class JourneyLogController {
    constructor(private readonly journeyLogService: JourneyLogService) { }

    @Post()
    create(
         @GetUser('id') userId: number,
        @Body() createJourneyLogDto: CreateJourneyLogDto) {
        return this.journeyLogService.create(userId, createJourneyLogDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.journeyLogService.findOne(+id);
    }
}