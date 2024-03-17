import { ApiProperty } from '@nestjs/swagger';

export class CreateKanbanTaskDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  stage: string;

  @ApiProperty()
  priority: string;

  @ApiProperty()
  desc: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  listId: number;
}
