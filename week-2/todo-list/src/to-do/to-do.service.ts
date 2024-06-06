import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import { List } from '@prisma/client';

@Injectable()
export class ToDoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createToDoDto: CreateToDoDto): Promise<List> {
    try {
      const { title, content, due } = createToDoDto;
      const createdToDo = await this.prisma.list.create({
        data: {
          title,
          content,
          due,
          isCompleted: false,
        },
      });
      return createdToDo;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll() {
    try {
      return await this.prisma.list.findMany();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.list.findUnique({
        where: { id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateToDoDto: UpdateToDoDto) {
    try {
      updateToDoDto.updatedAt;
      return await this.prisma.list.update({
        where: { id },
        data: updateToDoDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.list.delete({
        where: { id },
      });
    } catch (error) {
      return error.message;
    }
  }
}
