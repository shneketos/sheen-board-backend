import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findById(id) {
    return this.repository.findOneBy({ id });
  }
  async findByEmail(email) {
    return this.repository.findOneBy({ email });
  }
  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return `This action returns all boardsLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardsList`;
  }

  update(id: number, dto: UpdateUserDto) {
    return `This action updates a #${id} boardsList`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardsList`;
  }
}
