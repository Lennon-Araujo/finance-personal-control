import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  when: Date;

  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @IsBoolean()
  shared: boolean;

  created_at: Date;

  updated_at: Date;
}
