import { Module } from '@nestjs/common';
import { BacklogsService } from './backlogs.service';
import { BacklogsController } from './backlogs.controller';

@Module({
  controllers: [BacklogsController],
  providers: [BacklogsService],
})
export class BacklogsModule {}
