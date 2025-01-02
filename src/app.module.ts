import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CollectionModule } from './collection/collection.module';
import { CollectibleItemModule } from './collectible-item/collectible-item.module';
import { CollectionCollectibleItemModule } from './collection-collectible-item/collection-collectible-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    NoteModule,
    CollectionModule,
    CollectibleItemModule,
    CollectionCollectibleItemModule,
    PrismaModule, //auto-import module
    //another modules
  ],
})
export class AppModule { }
