import { Module } from '@nestjs/common';
import { ParserService } from 'src/parser/parser.service';
import { PrismaService } from 'src/prisma.service';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

@Module({
  providers: [ExchangeService, PrismaService, ParserService],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
