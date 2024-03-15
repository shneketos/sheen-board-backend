import { ApiProperty } from '@nestjs/swagger';
export class CreateWorkspaceDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  ownerId: number;
  @ApiProperty()
  members: number[];
}
