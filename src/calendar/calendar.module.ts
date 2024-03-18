import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { CalendarEntity } from './entities/calendar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CalendarController],
  providers: [CalendarService],
  imports: [TypeOrmModule.forFeature([CalendarEntity])],
  exports: [CalendarService],
})
export class CalendarModule {}
