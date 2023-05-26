import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated';
import { ParserService } from 'src/parser/parser.service';
import { PrismaService } from 'src/prisma.service';
import { ExchangeOfficeType } from 'src/types';

@Injectable()
export class ExchangeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly parser: ParserService,
  ) {}

  async saveParsedExchangeOfficeType(
    exchangeOffice: ExchangeOfficeType,
    countries: Prisma.CountryUncheckedCreateInput[],
  ) {
    try {
      const { id, name, exchanges, rates, country } = exchangeOffice;
      
      for (const countryData of countries) {
        await this.prisma.country.upsert({
          where: { code: countryData.code },
          create: { ...countryData },
          update: { ...countryData },
        });
      }

      const countryCode = await this.prisma.country.findFirst({
        where: {
          code: country,
        },
      });

      await this.prisma.exchangeOffice.upsert({
        where: {
          id,
        },
        create: {
          id,
          name,
          countryId: countryCode.id,
        },
        update: {
          id,
          name,
          countryId: countryCode.id,
        },
      });

      await this.prisma.exchange.createMany({ data: exchanges });
      await this.prisma.rate.createMany({ data: rates });
    } catch (error) {
      throw error;
    }
  }

  async saveManyParsedExchangeOfficeType(
    exchangeOffices: ExchangeOfficeType[],
    countries: Prisma.CountryUncheckedCreateInput[],
  ) {
    try {
      await Promise.all(
        exchangeOffices.map((exchangeOffice) =>
          this.saveParsedExchangeOfficeType(exchangeOffice, countries),
        ),
      );
    } catch (error) {
      throw error;
    }
  }

  async upload(data: string) {
    const parsedData = this.parser.parseExchangeOffices(data);
    await this.saveManyParsedExchangeOfficeType(
      parsedData.exchangeOffices,
      parsedData.countries,
    );
  }
}
