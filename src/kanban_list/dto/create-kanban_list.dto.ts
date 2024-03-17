import { ApiProperty } from '@nestjs/swagger';

export class CreateKanbanListDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  kanbanId: number;
}
