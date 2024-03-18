import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkspaceEntity } from './entities/workspace.entity';
import { KanbanEntity } from 'src/kanban/entities/kanban.entity';
import { BacklogEntity } from 'src/backlog/entities/backlog.entity';
import { CalendarEntity } from 'src/calendar/entities/calendar.entity';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(WorkspaceEntity)
    private repository: Repository<WorkspaceEntity>,
    @InjectRepository(KanbanEntity)
    private readonly kanbanRepository: Repository<KanbanEntity>,
    @InjectRepository(BacklogEntity)
    private readonly backlogRepository: Repository<BacklogEntity>,
    @InjectRepository(CalendarEntity)
    private readonly calendarRepository: Repository<CalendarEntity>,
  ) {}
  async create(
    workspaceData: Partial<WorkspaceEntity>,
  ): Promise<WorkspaceEntity> {
    const workspace = this.repository.create(workspaceData);
    return await this.repository.save(workspace);
  }

  async createKanban(): Promise<KanbanEntity> {
    const kanban = new KanbanEntity();
    return await this.kanbanRepository.save(kanban);
  }

  async createBacklog(): Promise<BacklogEntity> {
    const backlog = new BacklogEntity();
    return await this.backlogRepository.save(backlog);
  }
  async createCalendar(): Promise<CalendarEntity> {
    const calendar = new CalendarEntity();
    return await this.calendarRepository.save(calendar);
  }
  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.kanban', 'kanban')
      .leftJoinAndSelect('workspace.backlog', 'backlog')
      .leftJoinAndSelect('workspace.calendar', 'calendar')
      .where('workspace.id = :id', { id })
      .getOne();
  }
  findWorkspacesByUserID(id: number) {
    return this.repository
      .createQueryBuilder('workspace')
      .where(':id IN (workspace.members)', { id })
      .getMany();
  }
  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
