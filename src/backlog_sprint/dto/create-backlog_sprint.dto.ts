import { ApiProperty } from '@nestjs/swagger';

export class CreateBacklogSprintDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  backlogId: number;
}
