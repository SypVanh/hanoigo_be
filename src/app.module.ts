import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CollectionModule } from './collection/collection.module';
import { CollectibleItemModule } from './collectible-item/collectible-item.module';
import { CollectionCollectibleItemModule } from './collection-collectible-item/collection-collectible-item.module';
import { JourneyLogModule } from './journey-log/journey-log.module';
import { CommentModule } from './comment/comment.module';
import { LocationModule } from './location/location.module';
import { LocationImageModule } from './location-image/location-image.module';
import { MarkerModule } from './marker/marker.module';
import { TaskModule } from './task/task.module';
import { UserTaskModule } from './user-task/user-task.module';
import { CategoryModule } from './category/category.module';
import { CategoryLocationModule } from './category-location/category-location.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    NoteModule,
    CategoryModule,
    CategoryLocationModule,
    CollectibleItemModule,
    CollectionModule,
    CollectionCollectibleItemModule,
    CommentModule,
    JourneyLogModule,
    LocationModule,
    LocationImageModule,
    MarkerModule,
    TaskModule,
    UserTaskModule,
    PrismaModule, //auto-import module
    //another modules
  ],
})
export class AppModule { }
