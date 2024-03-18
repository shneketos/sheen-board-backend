import { ApiProperty } from '@nestjs/swagger';

export class CreateBacklogTaskDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  priority: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  story: number;
  @ApiProperty()
  sprintId: number;
}
