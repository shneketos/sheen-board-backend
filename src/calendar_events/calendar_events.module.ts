import { Module } from '@nestjs/common';
import { CalendarEventsService } from './calendar_events.service';
import { CalendarEventsController } from './calendar_events.controller';
import { CalendarEventEntity } from './entities/calendar_event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CalendarEventsController],
  providers: [CalendarEventsService],
  imports: [TypeOrmModule.forFeature([CalendarEventEntity])],
  exports: [CalendarEventsService],
})
export class CalendarEventsModule {}
