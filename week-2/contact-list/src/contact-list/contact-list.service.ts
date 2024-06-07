import { Injectable } from '@nestjs/common';
import { CreateContactListDto } from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Contact, Prisma } from '@prisma/client';

@Injectable()
export class ContactListService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactListDto: CreateContactListDto): Promise<Contact> {
    return this.prisma.contact.create({
      data: {
        contactName: createContactListDto.contactName,
        contactNumber: createContactListDto.contactNumber,
      },
    });
  }

  // async findAll(): Promise<Contact[]> {
  //   return this.prisma.contact.findMany();
  // }
  async findByName(query: CreateContactListDto) {
    const { contactName } = query;
    let where: Prisma.ContactWhereInput = {};

    if (contactName) {
      where = {
        contactName: {
          contains: contactName,
        },
      };
    }

    return await this.prisma.contact.findMany({ where });
  }

  async findOne(id: number): Promise<Contact> {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateContactListDto: UpdateContactListDto,
  ): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id },
      data: {
        contactName: updateContactListDto.contactName,
        contactNumber: updateContactListDto.contactNumber,
      },
    });
  }

  async remove(id: number): Promise<Contact> {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
  async search(searchTerm: string): Promise<Contact[]> {
    return this.prisma.contact.findMany({
      where: {
        OR: [
          { contactName: { contains: searchTerm, mode: 'insensitive' } },
          { contactName: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
    });
  }
}
