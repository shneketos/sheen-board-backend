import { Module } from '@nestjs/common';
import { BoardsCardsService } from './boards_cards.service';
import { BoardsCardsController } from './boards_cards.controller';

@Module({
  controllers: [BoardsCardsController],
  providers: [BoardsCardsService],
})
export class BoardsCardsModule {}
