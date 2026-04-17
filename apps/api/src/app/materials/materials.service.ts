import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMaterialDto } from './dto/create-material.dto';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMaterialDto: CreateMaterialDto, file: any): Promise<any> {
    const { name, description, userId } = createMaterialDto;

    if (!file || !file.buffer) {
      throw new BadRequestException(
        'File is required when creating a material.',
      );
    }

    return this.prisma.material.create({
      data: {
        name,
        description,
        userId,
        fileType: file.mimetype,
        fileData: file.buffer,
        url: null,
      },
    });
  }
  //   TODO: Implement get files by user ID and pagination
  async findAll(): Promise<any[]> {
    return this.prisma.material.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        url: true,
        fileType: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: string): Promise<any> {
    const material = await this.prisma.material.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        url: true,
        fileType: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!material) {
      throw new NotFoundException(`Material with ID ${id} not found`);
    }

    return material;
  }

  async remove(id: string): Promise<any> {
    try {
      return await this.prisma.material.delete({
        where: { id },
        select: {
          id: true,
          name: true,
          description: true,
          url: true,
          fileType: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Material with ID ${id} not found`);
    }
  }
}
