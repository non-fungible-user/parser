import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated';
import { PrismaService } from 'src/prisma.service';
import { ExchangeOfficeType } from 'src/types';

@Injectable()
export class ParserService {
  constructor(private readonly prisma: PrismaService) {
    const data = `
exchange-offices
  exchange-office
    id = 1
    name = Exchanger 1
    country = UKR
    exchanges
      exchange
        from = EUR
        to = USD
        ask = 110
        date = 2023-04-24 22:55:33
      exchange
        from = USD
        to = UAH
        ask = 400
        date = 2023-04-24 22:55:33
    rates
      rate
        from = EUR
        to = USD
        in = 1.1
        out = 1
        reserve = 120000
        date = 2023-04-24 22:55:33
      rate
        from = USD
        to = UAH
        in = 1
        out = 40
        reserve = 150000
        date = 2023-04-24 22:55:33
  exchange-office
    id = 2
    name = Exchanger 2
    country = UKR
    rates
      rate
        from = AUD
        to = CAD
        in = 1
        out = 2
        reserve = 150000
        date = 2023-04-24 22:55:33
  countries
    country
      code = UKR
      name = Ukraine
`;
  }

  parseExchangeOffices(data: string) {
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const exchangeOffices: ExchangeOfficeType[] = [];
    const countries: Prisma.CountryUncheckedCreateInput[] = [];
    let currentExchangeOffice: ExchangeOfficeType;
    let currentExchange: Prisma.ExchangeUncheckedCreateInput;
    let currentRate: Prisma.RateUncheckedCreateInput;
    let currentCountry: Prisma.CountryUncheckedCreateInput;

    for (const line of lines) {
      const indentLevel = line.search(/\S/);
      const lineData = line.trim().split(' = ');
      const [key, value] = lineData;

      if (indentLevel === 0 && key === 'exchange-offices') {
        continue;
      }

      if (indentLevel === 2 && key === 'exchange-office') {
        currentExchangeOffice = {
          id: null,
          name: null,
          country: null,
          exchanges: [],
          rates: [],
        };
        exchangeOffices.push(currentExchangeOffice);
        continue;
      }

      if (indentLevel === 4) {
        switch (key) {
          case 'id':
            currentExchangeOffice.id = parseInt(value);
            break;
          case 'name':
            currentExchangeOffice.name = value;
            break;
          case 'country':
            if (currentExchangeOffice.country === null) {
              currentExchangeOffice.country = value;
            }
            break;
        }
      }

      if (indentLevel === 6 && key === 'exchange') {
        currentExchange = {
          from: value,
          to: null,
          ask: null,
          date: null,
          officeId: currentExchangeOffice.id,
        };
        currentExchangeOffice.exchanges.push(currentExchange);
        continue;
      }

      if (indentLevel === 8 && currentExchange) {
        switch (key) {
          case 'to':
            currentExchange.to = currentExchange.to || value;
            break;
          case 'ask':
            currentExchange.ask = currentExchange.ask || parseFloat(value);
            break;
          case 'date':
            currentExchange.date = currentExchange.date || new Date(value);
            break;
          case 'from':
            currentExchange.from = currentExchange.from || value;
            break;
        }
      }

      if (indentLevel === 6 && key === 'rate') {
        currentRate = {
          from: value,
          to: null,
          in: null,
          out: null,
          reserve: null,
          date: null,
          officeId: currentExchangeOffice.id,
        };
        currentExchangeOffice.rates.push(currentRate);
        continue;
      }

      if (indentLevel === 8 && currentRate) {
        switch (key) {
          case 'to':
            currentRate.to = currentRate.to || value;
            break;
          case 'from':
            currentRate.from = currentRate.from || value;
            break;
          case 'in':
            currentRate.in = currentRate.in || parseFloat(value);
            break;
          case 'out':
            currentRate.out = currentRate.out || parseFloat(value);
            break;
          case 'reserve':
            currentRate.reserve = currentRate.reserve || parseInt(value);
            break;
          case 'date':
            currentRate.date = currentRate.date || new Date(value);
            break;
        }
      }

      if (indentLevel === 4 && key === 'country') {
        currentCountry = {
          name: null,
          code: null,
        };
        continue;
      }

      if (indentLevel === 6 && currentCountry) {
        switch (key) {
          case 'name':
            currentCountry.name = currentCountry.name || value;
            break;
          case 'code':
            currentCountry.code = currentCountry.code || value;
            break;
        }

        if (currentCountry.code && currentCountry.name) {
          countries.push(currentCountry);
        }
      }
    }

    return { exchangeOffices, countries };
  }
}
