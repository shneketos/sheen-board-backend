import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkspaceEntity } from './entities/workspace.entity';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(WorkspaceEntity)
    private repository: Repository<WorkspaceEntity>,
  ) {}
  create(dto: CreateWorkspaceDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository
      .createQueryBuilder('workspace')
      .where('workspace.id = :id', { id: id })
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
