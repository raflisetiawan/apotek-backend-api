import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class RegisterDto implements Prisma.usersCreateInput {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
