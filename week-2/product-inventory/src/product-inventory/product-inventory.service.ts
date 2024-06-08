import { Injectable } from '@nestjs/common';
import { CreateProductInventoryDto } from './dto/create-product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductInventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createProductInventoryDto: CreateProductInventoryDto,
  ): Promise<Products> {
    const {
      productName,
      productDescription,
      productPrice,
      stockQuantity,
      lastUpdated,
    } = createProductInventoryDto;

    // Check if the product already exists
    const existingProduct = await this.prisma.products.findFirst({
      where: {
        productName,
      },
    });

    if (existingProduct) {
      // Update the existing product's stock
      return this.prisma.products.update({
        where: {
          productId: existingProduct.productId,
        },
        data: {
          stockQuantity: {
            increment: stockQuantity || 1,
          },
          productPrice,
        },
      });
    } else {
      // Create a new product
      return this.prisma.products.create({
        data: {
          productName,
          productDescription,
          productPrice,
          stockQuantity: 1,
          lastUpdated,
        },
      });
    }
  }
  async findAll(): Promise<Products[]> {
    try {
      return await this.prisma.products.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Products | null> {
    try {
      return await this.prisma.products.findUnique({
        where: {
          productId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateProductInventoryDto: UpdateProductInventoryDto,
  ): Promise<Products> {
    try {
      const {
        productName,
        productDescription,
        productPrice,
        stockQuantity,
        lastUpdated,
      } = updateProductInventoryDto;
      return await this.prisma.products.update({
        where: {
          productId: id,
        },
        data: {
          productName,
          productDescription,
          productPrice,
          stockQuantity,
          lastUpdated,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<Products> {
    try {
      return await this.prisma.products.delete({
        where: {
          productId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
