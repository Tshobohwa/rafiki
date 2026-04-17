import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import * as fs from 'fs';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMaterialDto: CreateMaterialDto, file: any): Promise<any> {
    const { name, description, userId } = createMaterialDto;

    if (!file) {
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
        url: file.path,
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

  async download(id: string, res: any): Promise<void> {
    const material = await this.prisma.material.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        url: true,
        fileType: true,
      },
    });

    if (!material) {
      throw new NotFoundException(`Material with ID ${id} not found`);
    }

    if (!fs.existsSync(material.url)) {
      throw new NotFoundException(`File not found on disk`);
    }

    res.setHeader('Content-Type', material.fileType);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${material.name}"`,
    );
    const fileStream = fs.createReadStream(material.url);
    fileStream.pipe(res);
  }

  async remove(id: string): Promise<any> {
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

    // Delete file from disk if it exists
    if (material.url && fs.existsSync(material.url)) {
      try {
        fs.unlinkSync(material.url);
      } catch (error) {
        // Log error but don't fail the deletion
        console.error(`Failed to delete file ${material.url}:`, error);
      }
    }

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
  }
}
