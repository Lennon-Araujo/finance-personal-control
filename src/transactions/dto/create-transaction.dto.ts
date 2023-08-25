import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  when: Date;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsBoolean()
  shared: boolean;
}
