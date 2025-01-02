import { Module } from '@nestjs/common';
import { JourneyLogController } from './journey-log.controller';
import { JourneyLogService } from './journey-log.service';


@Module({
    controllers: [JourneyLogController],
    providers: [JourneyLogService],
})
export class JourneyLogModule { }
