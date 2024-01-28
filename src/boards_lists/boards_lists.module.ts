import { Module } from '@nestjs/common';
import { BoardsListsService } from './boards_lists.service';
import { BoardsListsController } from './boards_lists.controller';

@Module({
  controllers: [BoardsListsController],
  providers: [BoardsListsService],
})
export class BoardsListsModule {}
