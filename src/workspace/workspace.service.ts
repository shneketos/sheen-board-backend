import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkspaceEntity } from './entities/workspace.entity';
import { KanbanEntity } from 'src/kanban/entities/kanban.entity';
import { BacklogEntity } from 'src/backlog/entities/backlog.entity';
import { CalendarEntity } from 'src/calendar/entities/calendar.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';

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
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
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
  async findWorkspacesByUserID(id: number): Promise<WorkspaceEntity[]> {
    const workspaces = await this.repository.find();
    const filteredWorkspaces = workspaces.filter((workspace) =>
      workspace.members.map(Number).includes(id),
    );
    return filteredWorkspaces;
  }
  remove(id: number) {
    return this.repository.delete(id);
  }
  async getMembers(id: number): Promise<any[]> {
    const workspace = await this.repository.findOneBy({ id });
    if (!workspace) {
      throw new NotFoundException('Workspace not found');
    }

    const members = await Promise.all(
      workspace.members.map(async (id) => {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        };
      }),
    );

    return members;
  }
  async update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    const workspace = await this.repository.findOneBy({ id });

    if (!workspace) {
      throw new NotFoundException(`workspace with id ${id} not found.`);
    }
    Object.assign(workspace, updateWorkspaceDto);

    return this.repository.save(workspace);
  }
}
