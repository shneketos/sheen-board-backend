import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './users/entities/user.entity';
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkspaceEntity } from './workspace/entities/workspace.entity';
import { BoardsListsModule } from './boards_lists/boards_lists.module';
import { BoardsCardsModule } from './boards_cards/boards_cards.module';
import { BoardCardsEntity } from './boards_cards/entities/boards_card.entity';
import { BoardListsEntity } from './boards_lists/entities/boards_list.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_HOST) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        UserEntity,
        WorkspaceEntity,
        BoardCardsEntity,
        BoardListsEntity,
      ],
      synchronize: true,
    }),
    UsersModule,
    WorkspaceModule,
    BoardsListsModule,
    BoardsCardsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
