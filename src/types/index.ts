import { ExchangeOffice, Prisma } from 'prisma/generated';

export type ExchangeOfficeType = Omit<ExchangeOffice, 'countryId'> & {
  country: string;
  exchanges: Prisma.ExchangeUncheckedCreateInput[];
  rates: Prisma.RateUncheckedCreateInput[];
};
