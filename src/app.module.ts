import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ParserModule } from './parser/parser.module';
import { PrismaService } from './prisma.service';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ParserModule,
    ExchangeModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
