import { IsString, IsNumber } from 'class-validator';

export class CreateContactListDto {
  @IsString()
  contactName: string;

  @IsNumber()
  contactNumber: string;
}
