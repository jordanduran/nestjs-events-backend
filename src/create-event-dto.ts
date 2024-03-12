import { IsDateString, Length } from 'class-validator';

export class CreateEventDto {
  @Length(5, 255, { message: 'The length of name is too short' })
  name: string;
  @Length(5, 255)
  description: string;
  @IsDateString()
  when: string;
  @Length(5, 255)
  address: string;
}
