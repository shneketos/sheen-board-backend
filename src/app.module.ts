import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './users/entities/user.entity';
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkspaceEntity } from './workspace/entities/workspace.entity';
import { AuthModule } from './auth/auth.module';
import { KanbanModule } from './kanban/kanban.module';
import { BacklogModule } from './backlog/backlog.module';
import { CalendarModule } from './calendar/calendar.module';
import { KanbanListModule } from './kanban_list/kanban_list.module';
import { KanbanTasksModule } from './kanban_tasks/kanban_tasks.module';
import { KanbanEntity } from './kanban/entities/kanban.entity';
import { KanbanTaskEntity } from './kanban_tasks/entities/kanban_task.entity';
import { KanbanListEntity } from './kanban_list/entities/kanban_list.entity';
import { BacklogSprintModule } from './backlog_sprint/backlog_sprint.module';
import { BacklogTaskModule } from './backlog_task/backlog_task.module';
import { BacklogEntity } from './backlog/entities/backlog.entity';
import { BacklogSprintEntity } from './backlog_sprint/entities/backlog_sprint.entity';
import { BacklogTaskEntity } from './backlog_task/entities/backlog_task.entity';

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
        KanbanEntity,
        KanbanTaskEntity,
        KanbanListEntity,
        BacklogEntity,
        BacklogSprintEntity,
        BacklogTaskEntity,
      ],
      synchronize: true,
    }),
    UsersModule,
    WorkspaceModule,
    AuthModule,
    KanbanModule,
    BacklogModule,
    CalendarModule,
    KanbanListModule,
    KanbanTasksModule,
    BacklogSprintModule,
    BacklogTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
