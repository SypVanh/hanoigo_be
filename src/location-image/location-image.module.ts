import { Module } from '@nestjs/common';
import { LocationImageController } from './location-image.controller';
import { LocationImageService } from './location-image.service';


@Module({
    controllers: [LocationImageController],
    providers: [LocationImageService],
})
export class LocationImageModule { }
