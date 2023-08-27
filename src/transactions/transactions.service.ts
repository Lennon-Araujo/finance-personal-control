import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = this.prisma.transactions.create({
      data: createTransactionDto,
    });

    return transaction;
  }

  findAll() {
    return this.prisma.transactions.findMany({
      orderBy: {
        created_at: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.transactions.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.prisma.transactions.update({
      where: {
        id,
      },
      data: updateTransactionDto,
    });
  }

  remove(id: number) {
    return this.prisma.transactions.delete({
      where: {
        id,
      },
    });
  }
}
