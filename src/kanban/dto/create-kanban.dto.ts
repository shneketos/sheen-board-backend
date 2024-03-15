import { ApiProperty } from '@nestjs/swagger';

export class CreateKanbanDto {
  @ApiProperty()
  title: string;
}
