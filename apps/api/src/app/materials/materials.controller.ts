import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
const multer = require('multer');
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { Response } from 'express';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = 'apps/api/uploads/materials';
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.random().toString(36).substring(2);
          const extension = file.originalname.split('.').pop() || 'bin';
          cb(null, uniqueSuffix + '.' + extension);
        },
      }),
    }),
  )
  create(
    @Body() createMaterialDto: CreateMaterialDto,
    @UploadedFile() file: any,
  ) {
    if (!file) {
      throw new BadRequestException(
        'A file must be uploaded when creating a material.',
      );
    }
    return this.materialsService.create(createMaterialDto, file);
  }

  @Get()
  findAll() {
    return this.materialsService.findAll();
  }

  @Get(':id/download')
  async download(@Param('id') id: string, @Res() res: Response) {
    return this.materialsService.download(id, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialsService.remove(id);
  }
}
