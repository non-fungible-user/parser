import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ParserService } from './parser.service';

@Module({
  providers: [ParserService, PrismaService],
  exports: [ParserService]
})
export class ParserModule {}
