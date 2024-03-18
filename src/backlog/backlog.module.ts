import { Module } from '@nestjs/common';
import { BacklogService } from './backlog.service';
import { BacklogController } from './backlog.controller';
import { BacklogEntity } from './entities/backlog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BacklogController],
  providers: [BacklogService],
  imports: [TypeOrmModule.forFeature([BacklogEntity])],
  exports: [BacklogService],
})
export class BacklogModule {}
