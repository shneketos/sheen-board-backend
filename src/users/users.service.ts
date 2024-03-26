import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.repository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.name', 'user.avatar'])
      .where('user.id = :id', { id })
      .getOne();
  }
  async findByEmail(email) {
    return this.repository.findOneBy({ email });
  }
  async create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  async findAll() {
    return this.repository.find();
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    Object.assign(user, updateUserDto);

    return this.repository.save(user);
  }
}
