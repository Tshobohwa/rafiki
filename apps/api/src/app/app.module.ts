import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { UserModule } from './users/users.module';
import { MaterialsModule } from './materials/materials.module';

@Module({
  imports: [PrismaModule, UserModule, MaterialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
