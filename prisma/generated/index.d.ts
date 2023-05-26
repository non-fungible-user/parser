
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model ExchangeOffice
 * 
 */
export type ExchangeOffice = {
  id: number
  name: string
  countryId: number
}

/**
 * Model Exchange
 * 
 */
export type Exchange = {
  id: number
  from: string
  to: string
  ask: number
  date: Date
  officeId: number
}

/**
 * Model Rate
 * 
 */
export type Rate = {
  id: number
  from: string
  to: string
  in: number
  out: number
  reserve: number
  date: Date
  officeId: number
}

/**
 * Model Country
 * 
 */
export type Country = {
  id: number
  code: string
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ExchangeOffices
 * const exchangeOffices = await prisma.exchangeOffice.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ExchangeOffices
   * const exchangeOffices = await prisma.exchangeOffice.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.exchangeOffice`: Exposes CRUD operations for the **ExchangeOffice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeOffices
    * const exchangeOffices = await prisma.exchangeOffice.findMany()
    * ```
    */
  get exchangeOffice(): Prisma.ExchangeOfficeDelegate<GlobalReject>;

  /**
   * `prisma.exchange`: Exposes CRUD operations for the **Exchange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exchanges
    * const exchanges = await prisma.exchange.findMany()
    * ```
    */
  get exchange(): Prisma.ExchangeDelegate<GlobalReject>;

  /**
   * `prisma.rate`: Exposes CRUD operations for the **Rate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rates
    * const rates = await prisma.rate.findMany()
    * ```
    */
  get rate(): Prisma.RateDelegate<GlobalReject>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ExchangeOffice: 'ExchangeOffice',
    Exchange: 'Exchange',
    Rate: 'Rate',
    Country: 'Country'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExchangeOfficeCountOutputType
   */


  export type ExchangeOfficeCountOutputType = {
    exchanges: number
    rates: number
  }

  export type ExchangeOfficeCountOutputTypeSelect = {
    exchanges?: boolean
    rates?: boolean
  }

  export type ExchangeOfficeCountOutputTypeGetPayload<S extends boolean | null | undefined | ExchangeOfficeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExchangeOfficeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ExchangeOfficeCountOutputTypeArgs)
    ? ExchangeOfficeCountOutputType 
    : S extends { select: any } & (ExchangeOfficeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ExchangeOfficeCountOutputType ? ExchangeOfficeCountOutputType[P] : never
  } 
      : ExchangeOfficeCountOutputType




  // Custom InputTypes

  /**
   * ExchangeOfficeCountOutputType without action
   */
  export type ExchangeOfficeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOfficeCountOutputType
     */
    select?: ExchangeOfficeCountOutputTypeSelect | null
  }



  /**
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    ExchangeOffice: number
  }

  export type CountryCountOutputTypeSelect = {
    ExchangeOffice?: boolean
  }

  export type CountryCountOutputTypeGetPayload<S extends boolean | null | undefined | CountryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CountryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CountryCountOutputTypeArgs)
    ? CountryCountOutputType 
    : S extends { select: any } & (CountryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CountryCountOutputType ? CountryCountOutputType[P] : never
  } 
      : CountryCountOutputType




  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model ExchangeOffice
   */


  export type AggregateExchangeOffice = {
    _count: ExchangeOfficeCountAggregateOutputType | null
    _avg: ExchangeOfficeAvgAggregateOutputType | null
    _sum: ExchangeOfficeSumAggregateOutputType | null
    _min: ExchangeOfficeMinAggregateOutputType | null
    _max: ExchangeOfficeMaxAggregateOutputType | null
  }

  export type ExchangeOfficeAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type ExchangeOfficeSumAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type ExchangeOfficeMinAggregateOutputType = {
    id: number | null
    name: string | null
    countryId: number | null
  }

  export type ExchangeOfficeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    countryId: number | null
  }

  export type ExchangeOfficeCountAggregateOutputType = {
    id: number
    name: number
    countryId: number
    _all: number
  }


  export type ExchangeOfficeAvgAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type ExchangeOfficeSumAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type ExchangeOfficeMinAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
  }

  export type ExchangeOfficeMaxAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
  }

  export type ExchangeOfficeCountAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    _all?: true
  }

  export type ExchangeOfficeAggregateArgs = {
    /**
     * Filter which ExchangeOffice to aggregate.
     */
    where?: ExchangeOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOffices to fetch.
     */
    orderBy?: Enumerable<ExchangeOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeOffices
    **/
    _count?: true | ExchangeOfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeOfficeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeOfficeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeOfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeOfficeMaxAggregateInputType
  }

  export type GetExchangeOfficeAggregateType<T extends ExchangeOfficeAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeOffice[P]>
      : GetScalarType<T[P], AggregateExchangeOffice[P]>
  }




  export type ExchangeOfficeGroupByArgs = {
    where?: ExchangeOfficeWhereInput
    orderBy?: Enumerable<ExchangeOfficeOrderByWithAggregationInput>
    by: ExchangeOfficeScalarFieldEnum[]
    having?: ExchangeOfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeOfficeCountAggregateInputType | true
    _avg?: ExchangeOfficeAvgAggregateInputType
    _sum?: ExchangeOfficeSumAggregateInputType
    _min?: ExchangeOfficeMinAggregateInputType
    _max?: ExchangeOfficeMaxAggregateInputType
  }


  export type ExchangeOfficeGroupByOutputType = {
    id: number
    name: string
    countryId: number
    _count: ExchangeOfficeCountAggregateOutputType | null
    _avg: ExchangeOfficeAvgAggregateOutputType | null
    _sum: ExchangeOfficeSumAggregateOutputType | null
    _min: ExchangeOfficeMinAggregateOutputType | null
    _max: ExchangeOfficeMaxAggregateOutputType | null
  }

  type GetExchangeOfficeGroupByPayload<T extends ExchangeOfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExchangeOfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeOfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeOfficeGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeOfficeGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeOfficeSelect = {
    id?: boolean
    name?: boolean
    countryId?: boolean
    country?: boolean | CountryArgs
    exchanges?: boolean | ExchangeOffice$exchangesArgs
    rates?: boolean | ExchangeOffice$ratesArgs
    _count?: boolean | ExchangeOfficeCountOutputTypeArgs
  }


  export type ExchangeOfficeInclude = {
    country?: boolean | CountryArgs
    exchanges?: boolean | ExchangeOffice$exchangesArgs
    rates?: boolean | ExchangeOffice$ratesArgs
    _count?: boolean | ExchangeOfficeCountOutputTypeArgs
  }

  export type ExchangeOfficeGetPayload<S extends boolean | null | undefined | ExchangeOfficeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExchangeOffice :
    S extends undefined ? never :
    S extends { include: any } & (ExchangeOfficeArgs | ExchangeOfficeFindManyArgs)
    ? ExchangeOffice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'country' ? CountryGetPayload<S['include'][P]> :
        P extends 'exchanges' ? Array < ExchangeGetPayload<S['include'][P]>>  :
        P extends 'rates' ? Array < RateGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExchangeOfficeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExchangeOfficeArgs | ExchangeOfficeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'country' ? CountryGetPayload<S['select'][P]> :
        P extends 'exchanges' ? Array < ExchangeGetPayload<S['select'][P]>>  :
        P extends 'rates' ? Array < RateGetPayload<S['select'][P]>>  :
        P extends '_count' ? ExchangeOfficeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ExchangeOffice ? ExchangeOffice[P] : never
  } 
      : ExchangeOffice


  type ExchangeOfficeCountArgs = 
    Omit<ExchangeOfficeFindManyArgs, 'select' | 'include'> & {
      select?: ExchangeOfficeCountAggregateInputType | true
    }

  export interface ExchangeOfficeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ExchangeOffice that matches the filter.
     * @param {ExchangeOfficeFindUniqueArgs} args - Arguments to find a ExchangeOffice
     * @example
     * // Get one ExchangeOffice
     * const exchangeOffice = await prisma.exchangeOffice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExchangeOfficeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExchangeOfficeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExchangeOffice'> extends True ? Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>> : Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T> | null, null>

    /**
     * Find one ExchangeOffice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExchangeOfficeFindUniqueOrThrowArgs} args - Arguments to find a ExchangeOffice
     * @example
     * // Get one ExchangeOffice
     * const exchangeOffice = await prisma.exchangeOffice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExchangeOfficeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExchangeOfficeFindUniqueOrThrowArgs>
    ): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>>

    /**
     * Find the first ExchangeOffice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeFindFirstArgs} args - Arguments to find a ExchangeOffice
     * @example
     * // Get one ExchangeOffice
     * const exchangeOffice = await prisma.exchangeOffice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExchangeOfficeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExchangeOfficeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExchangeOffice'> extends True ? Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>> : Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T> | null, null>

    /**
     * Find the first ExchangeOffice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeFindFirstOrThrowArgs} args - Arguments to find a ExchangeOffice
     * @example
     * // Get one ExchangeOffice
     * const exchangeOffice = await prisma.exchangeOffice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExchangeOfficeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExchangeOfficeFindFirstOrThrowArgs>
    ): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>>

    /**
     * Find zero or more ExchangeOffices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeOffices
     * const exchangeOffices = await prisma.exchangeOffice.findMany()
     * 
     * // Get first 10 ExchangeOffices
     * const exchangeOffices = await prisma.exchangeOffice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeOfficeWithIdOnly = await prisma.exchangeOffice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExchangeOfficeFindManyArgs>(
      args?: SelectSubset<T, ExchangeOfficeFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExchangeOfficeGetPayload<T>>>

    /**
     * Create a ExchangeOffice.
     * @param {ExchangeOfficeCreateArgs} args - Arguments to create a ExchangeOffice.
     * @example
     * // Create one ExchangeOffice
     * const ExchangeOffice = await prisma.exchangeOffice.create({
     *   data: {
     *     // ... data to create a ExchangeOffice
     *   }
     * })
     * 
    **/
    create<T extends ExchangeOfficeCreateArgs>(
      args: SelectSubset<T, ExchangeOfficeCreateArgs>
    ): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>>

    /**
     * Create many ExchangeOffices.
     *     @param {ExchangeOfficeCreateManyArgs} args - Arguments to create many ExchangeOffices.
     *     @example
     *     // Create many ExchangeOffices
     *     const exchangeOffice = await prisma.exchangeOffice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExchangeOfficeCreateManyArgs>(
      args?: SelectSubset<T, ExchangeOfficeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExchangeOffice.
     * @param {ExchangeOfficeDeleteArgs} args - Arguments to delete one ExchangeOffice.
     * @example
     * // Delete one ExchangeOffice
     * const ExchangeOffice = await prisma.exchangeOffice.delete({
     *   where: {
     *     // ... filter to delete one ExchangeOffice
     *   }
     * })
     * 
    **/
    delete<T extends ExchangeOfficeDeleteArgs>(
      args: SelectSubset<T, ExchangeOfficeDeleteArgs>
    ): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>>

    /**
     * Update one ExchangeOffice.
     * @param {ExchangeOfficeUpdateArgs} args - Arguments to update one ExchangeOffice.
     * @example
     * // Update one ExchangeOffice
     * const exchangeOffice = await prisma.exchangeOffice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExchangeOfficeUpdateArgs>(
      args: SelectSubset<T, ExchangeOfficeUpdateArgs>
    ): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>>

    /**
     * Delete zero or more ExchangeOffices.
     * @param {ExchangeOfficeDeleteManyArgs} args - Arguments to filter ExchangeOffices to delete.
     * @example
     * // Delete a few ExchangeOffices
     * const { count } = await prisma.exchangeOffice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExchangeOfficeDeleteManyArgs>(
      args?: SelectSubset<T, ExchangeOfficeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeOffices
     * const exchangeOffice = await prisma.exchangeOffice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExchangeOfficeUpdateManyArgs>(
      args: SelectSubset<T, ExchangeOfficeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExchangeOffice.
     * @param {ExchangeOfficeUpsertArgs} args - Arguments to update or create a ExchangeOffice.
     * @example
     * // Update or create a ExchangeOffice
     * const exchangeOffice = await prisma.exchangeOffice.upsert({
     *   create: {
     *     // ... data to create a ExchangeOffice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeOffice we want to update
     *   }
     * })
    **/
    upsert<T extends ExchangeOfficeUpsertArgs>(
      args: SelectSubset<T, ExchangeOfficeUpsertArgs>
    ): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T>>

    /**
     * Count the number of ExchangeOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeCountArgs} args - Arguments to filter ExchangeOffices to count.
     * @example
     * // Count the number of ExchangeOffices
     * const count = await prisma.exchangeOffice.count({
     *   where: {
     *     // ... the filter for the ExchangeOffices we want to count
     *   }
     * })
    **/
    count<T extends ExchangeOfficeCountArgs>(
      args?: Subset<T, ExchangeOfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeOfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeOfficeAggregateArgs>(args: Subset<T, ExchangeOfficeAggregateArgs>): Prisma.PrismaPromise<GetExchangeOfficeAggregateType<T>>

    /**
     * Group by ExchangeOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOfficeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExchangeOfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeOfficeGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeOfficeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExchangeOfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeOffice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExchangeOfficeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    country<T extends CountryArgs= {}>(args?: Subset<T, CountryArgs>): Prisma__CountryClient<CountryGetPayload<T> | Null>;

    exchanges<T extends ExchangeOffice$exchangesArgs= {}>(args?: Subset<T, ExchangeOffice$exchangesArgs>): Prisma.PrismaPromise<Array<ExchangeGetPayload<T>>| Null>;

    rates<T extends ExchangeOffice$ratesArgs= {}>(args?: Subset<T, ExchangeOffice$ratesArgs>): Prisma.PrismaPromise<Array<RateGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ExchangeOffice base type for findUnique actions
   */
  export type ExchangeOfficeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * Filter, which ExchangeOffice to fetch.
     */
    where: ExchangeOfficeWhereUniqueInput
  }

  /**
   * ExchangeOffice findUnique
   */
  export interface ExchangeOfficeFindUniqueArgs extends ExchangeOfficeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExchangeOffice findUniqueOrThrow
   */
  export type ExchangeOfficeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * Filter, which ExchangeOffice to fetch.
     */
    where: ExchangeOfficeWhereUniqueInput
  }


  /**
   * ExchangeOffice base type for findFirst actions
   */
  export type ExchangeOfficeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * Filter, which ExchangeOffice to fetch.
     */
    where?: ExchangeOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOffices to fetch.
     */
    orderBy?: Enumerable<ExchangeOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeOffices.
     */
    cursor?: ExchangeOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeOffices.
     */
    distinct?: Enumerable<ExchangeOfficeScalarFieldEnum>
  }

  /**
   * ExchangeOffice findFirst
   */
  export interface ExchangeOfficeFindFirstArgs extends ExchangeOfficeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExchangeOffice findFirstOrThrow
   */
  export type ExchangeOfficeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * Filter, which ExchangeOffice to fetch.
     */
    where?: ExchangeOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOffices to fetch.
     */
    orderBy?: Enumerable<ExchangeOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeOffices.
     */
    cursor?: ExchangeOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeOffices.
     */
    distinct?: Enumerable<ExchangeOfficeScalarFieldEnum>
  }


  /**
   * ExchangeOffice findMany
   */
  export type ExchangeOfficeFindManyArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * Filter, which ExchangeOffices to fetch.
     */
    where?: ExchangeOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOffices to fetch.
     */
    orderBy?: Enumerable<ExchangeOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeOffices.
     */
    cursor?: ExchangeOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOffices.
     */
    skip?: number
    distinct?: Enumerable<ExchangeOfficeScalarFieldEnum>
  }


  /**
   * ExchangeOffice create
   */
  export type ExchangeOfficeCreateArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * The data needed to create a ExchangeOffice.
     */
    data: XOR<ExchangeOfficeCreateInput, ExchangeOfficeUncheckedCreateInput>
  }


  /**
   * ExchangeOffice createMany
   */
  export type ExchangeOfficeCreateManyArgs = {
    /**
     * The data used to create many ExchangeOffices.
     */
    data: Enumerable<ExchangeOfficeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ExchangeOffice update
   */
  export type ExchangeOfficeUpdateArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * The data needed to update a ExchangeOffice.
     */
    data: XOR<ExchangeOfficeUpdateInput, ExchangeOfficeUncheckedUpdateInput>
    /**
     * Choose, which ExchangeOffice to update.
     */
    where: ExchangeOfficeWhereUniqueInput
  }


  /**
   * ExchangeOffice updateMany
   */
  export type ExchangeOfficeUpdateManyArgs = {
    /**
     * The data used to update ExchangeOffices.
     */
    data: XOR<ExchangeOfficeUpdateManyMutationInput, ExchangeOfficeUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeOffices to update
     */
    where?: ExchangeOfficeWhereInput
  }


  /**
   * ExchangeOffice upsert
   */
  export type ExchangeOfficeUpsertArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * The filter to search for the ExchangeOffice to update in case it exists.
     */
    where: ExchangeOfficeWhereUniqueInput
    /**
     * In case the ExchangeOffice found by the `where` argument doesn't exist, create a new ExchangeOffice with this data.
     */
    create: XOR<ExchangeOfficeCreateInput, ExchangeOfficeUncheckedCreateInput>
    /**
     * In case the ExchangeOffice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeOfficeUpdateInput, ExchangeOfficeUncheckedUpdateInput>
  }


  /**
   * ExchangeOffice delete
   */
  export type ExchangeOfficeDeleteArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    /**
     * Filter which ExchangeOffice to delete.
     */
    where: ExchangeOfficeWhereUniqueInput
  }


  /**
   * ExchangeOffice deleteMany
   */
  export type ExchangeOfficeDeleteManyArgs = {
    /**
     * Filter which ExchangeOffices to delete
     */
    where?: ExchangeOfficeWhereInput
  }


  /**
   * ExchangeOffice.exchanges
   */
  export type ExchangeOffice$exchangesArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    where?: ExchangeWhereInput
    orderBy?: Enumerable<ExchangeOrderByWithRelationInput>
    cursor?: ExchangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExchangeScalarFieldEnum>
  }


  /**
   * ExchangeOffice.rates
   */
  export type ExchangeOffice$ratesArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    where?: RateWhereInput
    orderBy?: Enumerable<RateOrderByWithRelationInput>
    cursor?: RateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RateScalarFieldEnum>
  }


  /**
   * ExchangeOffice without action
   */
  export type ExchangeOfficeArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
  }



  /**
   * Model Exchange
   */


  export type AggregateExchange = {
    _count: ExchangeCountAggregateOutputType | null
    _avg: ExchangeAvgAggregateOutputType | null
    _sum: ExchangeSumAggregateOutputType | null
    _min: ExchangeMinAggregateOutputType | null
    _max: ExchangeMaxAggregateOutputType | null
  }

  export type ExchangeAvgAggregateOutputType = {
    id: number | null
    ask: number | null
    officeId: number | null
  }

  export type ExchangeSumAggregateOutputType = {
    id: number | null
    ask: number | null
    officeId: number | null
  }

  export type ExchangeMinAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    ask: number | null
    date: Date | null
    officeId: number | null
  }

  export type ExchangeMaxAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    ask: number | null
    date: Date | null
    officeId: number | null
  }

  export type ExchangeCountAggregateOutputType = {
    id: number
    from: number
    to: number
    ask: number
    date: number
    officeId: number
    _all: number
  }


  export type ExchangeAvgAggregateInputType = {
    id?: true
    ask?: true
    officeId?: true
  }

  export type ExchangeSumAggregateInputType = {
    id?: true
    ask?: true
    officeId?: true
  }

  export type ExchangeMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    ask?: true
    date?: true
    officeId?: true
  }

  export type ExchangeMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    ask?: true
    date?: true
    officeId?: true
  }

  export type ExchangeCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    ask?: true
    date?: true
    officeId?: true
    _all?: true
  }

  export type ExchangeAggregateArgs = {
    /**
     * Filter which Exchange to aggregate.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: Enumerable<ExchangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exchanges
    **/
    _count?: true | ExchangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeMaxAggregateInputType
  }

  export type GetExchangeAggregateType<T extends ExchangeAggregateArgs> = {
        [P in keyof T & keyof AggregateExchange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchange[P]>
      : GetScalarType<T[P], AggregateExchange[P]>
  }




  export type ExchangeGroupByArgs = {
    where?: ExchangeWhereInput
    orderBy?: Enumerable<ExchangeOrderByWithAggregationInput>
    by: ExchangeScalarFieldEnum[]
    having?: ExchangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeCountAggregateInputType | true
    _avg?: ExchangeAvgAggregateInputType
    _sum?: ExchangeSumAggregateInputType
    _min?: ExchangeMinAggregateInputType
    _max?: ExchangeMaxAggregateInputType
  }


  export type ExchangeGroupByOutputType = {
    id: number
    from: string
    to: string
    ask: number
    date: Date
    officeId: number
    _count: ExchangeCountAggregateOutputType | null
    _avg: ExchangeAvgAggregateOutputType | null
    _sum: ExchangeSumAggregateOutputType | null
    _min: ExchangeMinAggregateOutputType | null
    _max: ExchangeMaxAggregateOutputType | null
  }

  type GetExchangeGroupByPayload<T extends ExchangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExchangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeSelect = {
    id?: boolean
    from?: boolean
    to?: boolean
    ask?: boolean
    date?: boolean
    officeId?: boolean
    office?: boolean | ExchangeOfficeArgs
  }


  export type ExchangeInclude = {
    office?: boolean | ExchangeOfficeArgs
  }

  export type ExchangeGetPayload<S extends boolean | null | undefined | ExchangeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Exchange :
    S extends undefined ? never :
    S extends { include: any } & (ExchangeArgs | ExchangeFindManyArgs)
    ? Exchange  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'office' ? ExchangeOfficeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExchangeArgs | ExchangeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'office' ? ExchangeOfficeGetPayload<S['select'][P]> :  P extends keyof Exchange ? Exchange[P] : never
  } 
      : Exchange


  type ExchangeCountArgs = 
    Omit<ExchangeFindManyArgs, 'select' | 'include'> & {
      select?: ExchangeCountAggregateInputType | true
    }

  export interface ExchangeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Exchange that matches the filter.
     * @param {ExchangeFindUniqueArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExchangeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExchangeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exchange'> extends True ? Prisma__ExchangeClient<ExchangeGetPayload<T>> : Prisma__ExchangeClient<ExchangeGetPayload<T> | null, null>

    /**
     * Find one Exchange that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExchangeFindUniqueOrThrowArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExchangeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExchangeFindUniqueOrThrowArgs>
    ): Prisma__ExchangeClient<ExchangeGetPayload<T>>

    /**
     * Find the first Exchange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFindFirstArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExchangeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExchangeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exchange'> extends True ? Prisma__ExchangeClient<ExchangeGetPayload<T>> : Prisma__ExchangeClient<ExchangeGetPayload<T> | null, null>

    /**
     * Find the first Exchange that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFindFirstOrThrowArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExchangeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExchangeFindFirstOrThrowArgs>
    ): Prisma__ExchangeClient<ExchangeGetPayload<T>>

    /**
     * Find zero or more Exchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exchanges
     * const exchanges = await prisma.exchange.findMany()
     * 
     * // Get first 10 Exchanges
     * const exchanges = await prisma.exchange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeWithIdOnly = await prisma.exchange.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExchangeFindManyArgs>(
      args?: SelectSubset<T, ExchangeFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExchangeGetPayload<T>>>

    /**
     * Create a Exchange.
     * @param {ExchangeCreateArgs} args - Arguments to create a Exchange.
     * @example
     * // Create one Exchange
     * const Exchange = await prisma.exchange.create({
     *   data: {
     *     // ... data to create a Exchange
     *   }
     * })
     * 
    **/
    create<T extends ExchangeCreateArgs>(
      args: SelectSubset<T, ExchangeCreateArgs>
    ): Prisma__ExchangeClient<ExchangeGetPayload<T>>

    /**
     * Create many Exchanges.
     *     @param {ExchangeCreateManyArgs} args - Arguments to create many Exchanges.
     *     @example
     *     // Create many Exchanges
     *     const exchange = await prisma.exchange.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExchangeCreateManyArgs>(
      args?: SelectSubset<T, ExchangeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exchange.
     * @param {ExchangeDeleteArgs} args - Arguments to delete one Exchange.
     * @example
     * // Delete one Exchange
     * const Exchange = await prisma.exchange.delete({
     *   where: {
     *     // ... filter to delete one Exchange
     *   }
     * })
     * 
    **/
    delete<T extends ExchangeDeleteArgs>(
      args: SelectSubset<T, ExchangeDeleteArgs>
    ): Prisma__ExchangeClient<ExchangeGetPayload<T>>

    /**
     * Update one Exchange.
     * @param {ExchangeUpdateArgs} args - Arguments to update one Exchange.
     * @example
     * // Update one Exchange
     * const exchange = await prisma.exchange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExchangeUpdateArgs>(
      args: SelectSubset<T, ExchangeUpdateArgs>
    ): Prisma__ExchangeClient<ExchangeGetPayload<T>>

    /**
     * Delete zero or more Exchanges.
     * @param {ExchangeDeleteManyArgs} args - Arguments to filter Exchanges to delete.
     * @example
     * // Delete a few Exchanges
     * const { count } = await prisma.exchange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExchangeDeleteManyArgs>(
      args?: SelectSubset<T, ExchangeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exchanges
     * const exchange = await prisma.exchange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExchangeUpdateManyArgs>(
      args: SelectSubset<T, ExchangeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exchange.
     * @param {ExchangeUpsertArgs} args - Arguments to update or create a Exchange.
     * @example
     * // Update or create a Exchange
     * const exchange = await prisma.exchange.upsert({
     *   create: {
     *     // ... data to create a Exchange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exchange we want to update
     *   }
     * })
    **/
    upsert<T extends ExchangeUpsertArgs>(
      args: SelectSubset<T, ExchangeUpsertArgs>
    ): Prisma__ExchangeClient<ExchangeGetPayload<T>>

    /**
     * Count the number of Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeCountArgs} args - Arguments to filter Exchanges to count.
     * @example
     * // Count the number of Exchanges
     * const count = await prisma.exchange.count({
     *   where: {
     *     // ... the filter for the Exchanges we want to count
     *   }
     * })
    **/
    count<T extends ExchangeCountArgs>(
      args?: Subset<T, ExchangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exchange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeAggregateArgs>(args: Subset<T, ExchangeAggregateArgs>): Prisma.PrismaPromise<GetExchangeAggregateType<T>>

    /**
     * Group by Exchange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExchangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExchangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Exchange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExchangeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    office<T extends ExchangeOfficeArgs= {}>(args?: Subset<T, ExchangeOfficeArgs>): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Exchange base type for findUnique actions
   */
  export type ExchangeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * Filter, which Exchange to fetch.
     */
    where: ExchangeWhereUniqueInput
  }

  /**
   * Exchange findUnique
   */
  export interface ExchangeFindUniqueArgs extends ExchangeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exchange findUniqueOrThrow
   */
  export type ExchangeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * Filter, which Exchange to fetch.
     */
    where: ExchangeWhereUniqueInput
  }


  /**
   * Exchange base type for findFirst actions
   */
  export type ExchangeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * Filter, which Exchange to fetch.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: Enumerable<ExchangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exchanges.
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exchanges.
     */
    distinct?: Enumerable<ExchangeScalarFieldEnum>
  }

  /**
   * Exchange findFirst
   */
  export interface ExchangeFindFirstArgs extends ExchangeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exchange findFirstOrThrow
   */
  export type ExchangeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * Filter, which Exchange to fetch.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: Enumerable<ExchangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exchanges.
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exchanges.
     */
    distinct?: Enumerable<ExchangeScalarFieldEnum>
  }


  /**
   * Exchange findMany
   */
  export type ExchangeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * Filter, which Exchanges to fetch.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: Enumerable<ExchangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exchanges.
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    distinct?: Enumerable<ExchangeScalarFieldEnum>
  }


  /**
   * Exchange create
   */
  export type ExchangeCreateArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * The data needed to create a Exchange.
     */
    data: XOR<ExchangeCreateInput, ExchangeUncheckedCreateInput>
  }


  /**
   * Exchange createMany
   */
  export type ExchangeCreateManyArgs = {
    /**
     * The data used to create many Exchanges.
     */
    data: Enumerable<ExchangeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exchange update
   */
  export type ExchangeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * The data needed to update a Exchange.
     */
    data: XOR<ExchangeUpdateInput, ExchangeUncheckedUpdateInput>
    /**
     * Choose, which Exchange to update.
     */
    where: ExchangeWhereUniqueInput
  }


  /**
   * Exchange updateMany
   */
  export type ExchangeUpdateManyArgs = {
    /**
     * The data used to update Exchanges.
     */
    data: XOR<ExchangeUpdateManyMutationInput, ExchangeUncheckedUpdateManyInput>
    /**
     * Filter which Exchanges to update
     */
    where?: ExchangeWhereInput
  }


  /**
   * Exchange upsert
   */
  export type ExchangeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * The filter to search for the Exchange to update in case it exists.
     */
    where: ExchangeWhereUniqueInput
    /**
     * In case the Exchange found by the `where` argument doesn't exist, create a new Exchange with this data.
     */
    create: XOR<ExchangeCreateInput, ExchangeUncheckedCreateInput>
    /**
     * In case the Exchange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeUpdateInput, ExchangeUncheckedUpdateInput>
  }


  /**
   * Exchange delete
   */
  export type ExchangeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
    /**
     * Filter which Exchange to delete.
     */
    where: ExchangeWhereUniqueInput
  }


  /**
   * Exchange deleteMany
   */
  export type ExchangeDeleteManyArgs = {
    /**
     * Filter which Exchanges to delete
     */
    where?: ExchangeWhereInput
  }


  /**
   * Exchange without action
   */
  export type ExchangeArgs = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeInclude | null
  }



  /**
   * Model Rate
   */


  export type AggregateRate = {
    _count: RateCountAggregateOutputType | null
    _avg: RateAvgAggregateOutputType | null
    _sum: RateSumAggregateOutputType | null
    _min: RateMinAggregateOutputType | null
    _max: RateMaxAggregateOutputType | null
  }

  export type RateAvgAggregateOutputType = {
    id: number | null
    in: number | null
    out: number | null
    reserve: number | null
    officeId: number | null
  }

  export type RateSumAggregateOutputType = {
    id: number | null
    in: number | null
    out: number | null
    reserve: number | null
    officeId: number | null
  }

  export type RateMinAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    in: number | null
    out: number | null
    reserve: number | null
    date: Date | null
    officeId: number | null
  }

  export type RateMaxAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    in: number | null
    out: number | null
    reserve: number | null
    date: Date | null
    officeId: number | null
  }

  export type RateCountAggregateOutputType = {
    id: number
    from: number
    to: number
    in: number
    out: number
    reserve: number
    date: number
    officeId: number
    _all: number
  }


  export type RateAvgAggregateInputType = {
    id?: true
    in?: true
    out?: true
    reserve?: true
    officeId?: true
  }

  export type RateSumAggregateInputType = {
    id?: true
    in?: true
    out?: true
    reserve?: true
    officeId?: true
  }

  export type RateMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    in?: true
    out?: true
    reserve?: true
    date?: true
    officeId?: true
  }

  export type RateMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    in?: true
    out?: true
    reserve?: true
    date?: true
    officeId?: true
  }

  export type RateCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    in?: true
    out?: true
    reserve?: true
    date?: true
    officeId?: true
    _all?: true
  }

  export type RateAggregateArgs = {
    /**
     * Filter which Rate to aggregate.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: Enumerable<RateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rates
    **/
    _count?: true | RateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateMaxAggregateInputType
  }

  export type GetRateAggregateType<T extends RateAggregateArgs> = {
        [P in keyof T & keyof AggregateRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRate[P]>
      : GetScalarType<T[P], AggregateRate[P]>
  }




  export type RateGroupByArgs = {
    where?: RateWhereInput
    orderBy?: Enumerable<RateOrderByWithAggregationInput>
    by: RateScalarFieldEnum[]
    having?: RateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateCountAggregateInputType | true
    _avg?: RateAvgAggregateInputType
    _sum?: RateSumAggregateInputType
    _min?: RateMinAggregateInputType
    _max?: RateMaxAggregateInputType
  }


  export type RateGroupByOutputType = {
    id: number
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date
    officeId: number
    _count: RateCountAggregateOutputType | null
    _avg: RateAvgAggregateOutputType | null
    _sum: RateSumAggregateOutputType | null
    _min: RateMinAggregateOutputType | null
    _max: RateMaxAggregateOutputType | null
  }

  type GetRateGroupByPayload<T extends RateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateGroupByOutputType[P]>
            : GetScalarType<T[P], RateGroupByOutputType[P]>
        }
      >
    >


  export type RateSelect = {
    id?: boolean
    from?: boolean
    to?: boolean
    in?: boolean
    out?: boolean
    reserve?: boolean
    date?: boolean
    officeId?: boolean
    office?: boolean | ExchangeOfficeArgs
  }


  export type RateInclude = {
    office?: boolean | ExchangeOfficeArgs
  }

  export type RateGetPayload<S extends boolean | null | undefined | RateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Rate :
    S extends undefined ? never :
    S extends { include: any } & (RateArgs | RateFindManyArgs)
    ? Rate  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'office' ? ExchangeOfficeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RateArgs | RateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'office' ? ExchangeOfficeGetPayload<S['select'][P]> :  P extends keyof Rate ? Rate[P] : never
  } 
      : Rate


  type RateCountArgs = 
    Omit<RateFindManyArgs, 'select' | 'include'> & {
      select?: RateCountAggregateInputType | true
    }

  export interface RateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Rate that matches the filter.
     * @param {RateFindUniqueArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rate'> extends True ? Prisma__RateClient<RateGetPayload<T>> : Prisma__RateClient<RateGetPayload<T> | null, null>

    /**
     * Find one Rate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RateFindUniqueOrThrowArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RateFindUniqueOrThrowArgs>
    ): Prisma__RateClient<RateGetPayload<T>>

    /**
     * Find the first Rate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindFirstArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rate'> extends True ? Prisma__RateClient<RateGetPayload<T>> : Prisma__RateClient<RateGetPayload<T> | null, null>

    /**
     * Find the first Rate that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindFirstOrThrowArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RateFindFirstOrThrowArgs>
    ): Prisma__RateClient<RateGetPayload<T>>

    /**
     * Find zero or more Rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rates
     * const rates = await prisma.rate.findMany()
     * 
     * // Get first 10 Rates
     * const rates = await prisma.rate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateWithIdOnly = await prisma.rate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RateFindManyArgs>(
      args?: SelectSubset<T, RateFindManyArgs>
    ): Prisma.PrismaPromise<Array<RateGetPayload<T>>>

    /**
     * Create a Rate.
     * @param {RateCreateArgs} args - Arguments to create a Rate.
     * @example
     * // Create one Rate
     * const Rate = await prisma.rate.create({
     *   data: {
     *     // ... data to create a Rate
     *   }
     * })
     * 
    **/
    create<T extends RateCreateArgs>(
      args: SelectSubset<T, RateCreateArgs>
    ): Prisma__RateClient<RateGetPayload<T>>

    /**
     * Create many Rates.
     *     @param {RateCreateManyArgs} args - Arguments to create many Rates.
     *     @example
     *     // Create many Rates
     *     const rate = await prisma.rate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RateCreateManyArgs>(
      args?: SelectSubset<T, RateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rate.
     * @param {RateDeleteArgs} args - Arguments to delete one Rate.
     * @example
     * // Delete one Rate
     * const Rate = await prisma.rate.delete({
     *   where: {
     *     // ... filter to delete one Rate
     *   }
     * })
     * 
    **/
    delete<T extends RateDeleteArgs>(
      args: SelectSubset<T, RateDeleteArgs>
    ): Prisma__RateClient<RateGetPayload<T>>

    /**
     * Update one Rate.
     * @param {RateUpdateArgs} args - Arguments to update one Rate.
     * @example
     * // Update one Rate
     * const rate = await prisma.rate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RateUpdateArgs>(
      args: SelectSubset<T, RateUpdateArgs>
    ): Prisma__RateClient<RateGetPayload<T>>

    /**
     * Delete zero or more Rates.
     * @param {RateDeleteManyArgs} args - Arguments to filter Rates to delete.
     * @example
     * // Delete a few Rates
     * const { count } = await prisma.rate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RateDeleteManyArgs>(
      args?: SelectSubset<T, RateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rates
     * const rate = await prisma.rate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RateUpdateManyArgs>(
      args: SelectSubset<T, RateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rate.
     * @param {RateUpsertArgs} args - Arguments to update or create a Rate.
     * @example
     * // Update or create a Rate
     * const rate = await prisma.rate.upsert({
     *   create: {
     *     // ... data to create a Rate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rate we want to update
     *   }
     * })
    **/
    upsert<T extends RateUpsertArgs>(
      args: SelectSubset<T, RateUpsertArgs>
    ): Prisma__RateClient<RateGetPayload<T>>

    /**
     * Count the number of Rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateCountArgs} args - Arguments to filter Rates to count.
     * @example
     * // Count the number of Rates
     * const count = await prisma.rate.count({
     *   where: {
     *     // ... the filter for the Rates we want to count
     *   }
     * })
    **/
    count<T extends RateCountArgs>(
      args?: Subset<T, RateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateAggregateArgs>(args: Subset<T, RateAggregateArgs>): Prisma.PrismaPromise<GetRateAggregateType<T>>

    /**
     * Group by Rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateGroupByArgs['orderBy'] }
        : { orderBy?: RateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Rate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    office<T extends ExchangeOfficeArgs= {}>(args?: Subset<T, ExchangeOfficeArgs>): Prisma__ExchangeOfficeClient<ExchangeOfficeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Rate base type for findUnique actions
   */
  export type RateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * Filter, which Rate to fetch.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate findUnique
   */
  export interface RateFindUniqueArgs extends RateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rate findUniqueOrThrow
   */
  export type RateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * Filter, which Rate to fetch.
     */
    where: RateWhereUniqueInput
  }


  /**
   * Rate base type for findFirst actions
   */
  export type RateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * Filter, which Rate to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: Enumerable<RateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rates.
     */
    distinct?: Enumerable<RateScalarFieldEnum>
  }

  /**
   * Rate findFirst
   */
  export interface RateFindFirstArgs extends RateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rate findFirstOrThrow
   */
  export type RateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * Filter, which Rate to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: Enumerable<RateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rates.
     */
    distinct?: Enumerable<RateScalarFieldEnum>
  }


  /**
   * Rate findMany
   */
  export type RateFindManyArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * Filter, which Rates to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: Enumerable<RateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    distinct?: Enumerable<RateScalarFieldEnum>
  }


  /**
   * Rate create
   */
  export type RateCreateArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * The data needed to create a Rate.
     */
    data: XOR<RateCreateInput, RateUncheckedCreateInput>
  }


  /**
   * Rate createMany
   */
  export type RateCreateManyArgs = {
    /**
     * The data used to create many Rates.
     */
    data: Enumerable<RateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rate update
   */
  export type RateUpdateArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * The data needed to update a Rate.
     */
    data: XOR<RateUpdateInput, RateUncheckedUpdateInput>
    /**
     * Choose, which Rate to update.
     */
    where: RateWhereUniqueInput
  }


  /**
   * Rate updateMany
   */
  export type RateUpdateManyArgs = {
    /**
     * The data used to update Rates.
     */
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyInput>
    /**
     * Filter which Rates to update
     */
    where?: RateWhereInput
  }


  /**
   * Rate upsert
   */
  export type RateUpsertArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * The filter to search for the Rate to update in case it exists.
     */
    where: RateWhereUniqueInput
    /**
     * In case the Rate found by the `where` argument doesn't exist, create a new Rate with this data.
     */
    create: XOR<RateCreateInput, RateUncheckedCreateInput>
    /**
     * In case the Rate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateUpdateInput, RateUncheckedUpdateInput>
  }


  /**
   * Rate delete
   */
  export type RateDeleteArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
    /**
     * Filter which Rate to delete.
     */
    where: RateWhereUniqueInput
  }


  /**
   * Rate deleteMany
   */
  export type RateDeleteManyArgs = {
    /**
     * Filter which Rates to delete
     */
    where?: RateWhereInput
  }


  /**
   * Rate without action
   */
  export type RateArgs = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RateInclude | null
  }



  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByWithAggregationInput>
    by: CountryScalarFieldEnum[]
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect = {
    id?: boolean
    code?: boolean
    name?: boolean
    ExchangeOffice?: boolean | Country$ExchangeOfficeArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }


  export type CountryInclude = {
    ExchangeOffice?: boolean | Country$ExchangeOfficeArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryGetPayload<S extends boolean | null | undefined | CountryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Country :
    S extends undefined ? never :
    S extends { include: any } & (CountryArgs | CountryFindManyArgs)
    ? Country  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ExchangeOffice' ? Array < ExchangeOfficeGetPayload<S['include'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CountryArgs | CountryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ExchangeOffice' ? Array < ExchangeOfficeGetPayload<S['select'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Country ? Country[P] : never
  } 
      : Country


  type CountryCountArgs = 
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? Prisma__CountryClient<CountryGetPayload<T>> : Prisma__CountryClient<CountryGetPayload<T> | null, null>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? Prisma__CountryClient<CountryGetPayload<T>> : Prisma__CountryClient<CountryGetPayload<T> | null, null>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs>(
      args?: SelectSubset<T, CountryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CountryGetPayload<T>>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs>(
      args: SelectSubset<T, CountryCreateArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs>(
      args?: SelectSubset<T, CountryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs>(
      args: SelectSubset<T, CountryDeleteArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs>(
      args: SelectSubset<T, CountryUpdateArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs>(
      args?: SelectSubset<T, CountryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs>(
      args: SelectSubset<T, CountryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs>(
      args: SelectSubset<T, CountryUpsertArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExchangeOffice<T extends Country$ExchangeOfficeArgs= {}>(args?: Subset<T, Country$ExchangeOfficeArgs>): Prisma.PrismaPromise<Array<ExchangeOfficeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Country base type for findUnique actions
   */
  export type CountryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUnique
   */
  export interface CountryFindUniqueArgs extends CountryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country base type for findFirst actions
   */
  export type CountryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * Country findFirst
   */
  export interface CountryFindFirstArgs extends CountryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs = {
    /**
     * The data used to create many Countries.
     */
    data: Enumerable<CountryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.ExchangeOffice
   */
  export type Country$ExchangeOfficeArgs = {
    /**
     * Select specific fields to fetch from the ExchangeOffice
     */
    select?: ExchangeOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExchangeOfficeInclude | null
    where?: ExchangeOfficeWhereInput
    orderBy?: Enumerable<ExchangeOfficeOrderByWithRelationInput>
    cursor?: ExchangeOfficeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExchangeOfficeScalarFieldEnum>
  }


  /**
   * Country without action
   */
  export type CountryArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const ExchangeOfficeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId'
  };

  export type ExchangeOfficeScalarFieldEnum = (typeof ExchangeOfficeScalarFieldEnum)[keyof typeof ExchangeOfficeScalarFieldEnum]


  export const ExchangeScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    ask: 'ask',
    date: 'date',
    officeId: 'officeId'
  };

  export type ExchangeScalarFieldEnum = (typeof ExchangeScalarFieldEnum)[keyof typeof ExchangeScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RateScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    in: 'in',
    out: 'out',
    reserve: 'reserve',
    date: 'date',
    officeId: 'officeId'
  };

  export type RateScalarFieldEnum = (typeof RateScalarFieldEnum)[keyof typeof RateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ExchangeOfficeWhereInput = {
    AND?: Enumerable<ExchangeOfficeWhereInput>
    OR?: Enumerable<ExchangeOfficeWhereInput>
    NOT?: Enumerable<ExchangeOfficeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    countryId?: IntFilter | number
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    exchanges?: ExchangeListRelationFilter
    rates?: RateListRelationFilter
  }

  export type ExchangeOfficeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    exchanges?: ExchangeOrderByRelationAggregateInput
    rates?: RateOrderByRelationAggregateInput
  }

  export type ExchangeOfficeWhereUniqueInput = {
    id?: number
  }

  export type ExchangeOfficeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    _count?: ExchangeOfficeCountOrderByAggregateInput
    _avg?: ExchangeOfficeAvgOrderByAggregateInput
    _max?: ExchangeOfficeMaxOrderByAggregateInput
    _min?: ExchangeOfficeMinOrderByAggregateInput
    _sum?: ExchangeOfficeSumOrderByAggregateInput
  }

  export type ExchangeOfficeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExchangeOfficeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExchangeOfficeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExchangeOfficeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    countryId?: IntWithAggregatesFilter | number
  }

  export type ExchangeWhereInput = {
    AND?: Enumerable<ExchangeWhereInput>
    OR?: Enumerable<ExchangeWhereInput>
    NOT?: Enumerable<ExchangeWhereInput>
    id?: IntFilter | number
    from?: StringFilter | string
    to?: StringFilter | string
    ask?: FloatFilter | number
    date?: DateTimeFilter | Date | string
    officeId?: IntFilter | number
    office?: XOR<ExchangeOfficeRelationFilter, ExchangeOfficeWhereInput>
  }

  export type ExchangeOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    ask?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
    office?: ExchangeOfficeOrderByWithRelationInput
  }

  export type ExchangeWhereUniqueInput = {
    id?: number
  }

  export type ExchangeOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    ask?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
    _count?: ExchangeCountOrderByAggregateInput
    _avg?: ExchangeAvgOrderByAggregateInput
    _max?: ExchangeMaxOrderByAggregateInput
    _min?: ExchangeMinOrderByAggregateInput
    _sum?: ExchangeSumOrderByAggregateInput
  }

  export type ExchangeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExchangeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExchangeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExchangeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    from?: StringWithAggregatesFilter | string
    to?: StringWithAggregatesFilter | string
    ask?: FloatWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    officeId?: IntWithAggregatesFilter | number
  }

  export type RateWhereInput = {
    AND?: Enumerable<RateWhereInput>
    OR?: Enumerable<RateWhereInput>
    NOT?: Enumerable<RateWhereInput>
    id?: IntFilter | number
    from?: StringFilter | string
    to?: StringFilter | string
    in?: FloatFilter | number
    out?: FloatFilter | number
    reserve?: IntFilter | number
    date?: DateTimeFilter | Date | string
    officeId?: IntFilter | number
    office?: XOR<ExchangeOfficeRelationFilter, ExchangeOfficeWhereInput>
  }

  export type RateOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
    office?: ExchangeOfficeOrderByWithRelationInput
  }

  export type RateWhereUniqueInput = {
    id?: number
  }

  export type RateOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
    _count?: RateCountOrderByAggregateInput
    _avg?: RateAvgOrderByAggregateInput
    _max?: RateMaxOrderByAggregateInput
    _min?: RateMinOrderByAggregateInput
    _sum?: RateSumOrderByAggregateInput
  }

  export type RateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RateScalarWhereWithAggregatesInput>
    OR?: Enumerable<RateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    from?: StringWithAggregatesFilter | string
    to?: StringWithAggregatesFilter | string
    in?: FloatWithAggregatesFilter | number
    out?: FloatWithAggregatesFilter | number
    reserve?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    officeId?: IntWithAggregatesFilter | number
  }

  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    ExchangeOffice?: ExchangeOfficeListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    ExchangeOffice?: ExchangeOfficeOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type ExchangeOfficeCreateInput = {
    name: string
    country: CountryCreateNestedOneWithoutExchangeOfficeInput
    exchanges?: ExchangeCreateNestedManyWithoutOfficeInput
    rates?: RateCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeUncheckedCreateInput = {
    id?: number
    name: string
    countryId: number
    exchanges?: ExchangeUncheckedCreateNestedManyWithoutOfficeInput
    rates?: RateUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutExchangeOfficeNestedInput
    exchanges?: ExchangeUpdateManyWithoutOfficeNestedInput
    rates?: RateUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    exchanges?: ExchangeUncheckedUpdateManyWithoutOfficeNestedInput
    rates?: RateUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeCreateManyInput = {
    id?: number
    name: string
    countryId: number
  }

  export type ExchangeOfficeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExchangeOfficeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type ExchangeCreateInput = {
    from: string
    to: string
    ask: number
    date: Date | string
    office: ExchangeOfficeCreateNestedOneWithoutExchangesInput
  }

  export type ExchangeUncheckedCreateInput = {
    id?: number
    from: string
    to: string
    ask: number
    date: Date | string
    officeId: number
  }

  export type ExchangeUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    office?: ExchangeOfficeUpdateOneRequiredWithoutExchangesNestedInput
  }

  export type ExchangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    officeId?: IntFieldUpdateOperationsInput | number
  }

  export type ExchangeCreateManyInput = {
    id?: number
    from: string
    to: string
    ask: number
    date: Date | string
    officeId: number
  }

  export type ExchangeUpdateManyMutationInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    officeId?: IntFieldUpdateOperationsInput | number
  }

  export type RateCreateInput = {
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date | string
    office: ExchangeOfficeCreateNestedOneWithoutRatesInput
  }

  export type RateUncheckedCreateInput = {
    id?: number
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date | string
    officeId: number
  }

  export type RateUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    office?: ExchangeOfficeUpdateOneRequiredWithoutRatesNestedInput
  }

  export type RateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    officeId?: IntFieldUpdateOperationsInput | number
  }

  export type RateCreateManyInput = {
    id?: number
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date | string
    officeId: number
  }

  export type RateUpdateManyMutationInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    officeId?: IntFieldUpdateOperationsInput | number
  }

  export type CountryCreateInput = {
    code: string
    name: string
    ExchangeOffice?: ExchangeOfficeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    ExchangeOffice?: ExchangeOfficeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ExchangeOffice?: ExchangeOfficeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ExchangeOffice?: ExchangeOfficeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type ExchangeListRelationFilter = {
    every?: ExchangeWhereInput
    some?: ExchangeWhereInput
    none?: ExchangeWhereInput
  }

  export type RateListRelationFilter = {
    every?: RateWhereInput
    some?: RateWhereInput
    none?: RateWhereInput
  }

  export type ExchangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExchangeOfficeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type ExchangeOfficeAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type ExchangeOfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type ExchangeOfficeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type ExchangeOfficeSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ExchangeOfficeRelationFilter = {
    is?: ExchangeOfficeWhereInput
    isNot?: ExchangeOfficeWhereInput
  }

  export type ExchangeCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    ask?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
  }

  export type ExchangeAvgOrderByAggregateInput = {
    id?: SortOrder
    ask?: SortOrder
    officeId?: SortOrder
  }

  export type ExchangeMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    ask?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
  }

  export type ExchangeMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    ask?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
  }

  export type ExchangeSumOrderByAggregateInput = {
    id?: SortOrder
    ask?: SortOrder
    officeId?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type RateCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
  }

  export type RateAvgOrderByAggregateInput = {
    id?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    officeId?: SortOrder
  }

  export type RateMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
  }

  export type RateMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    date?: SortOrder
    officeId?: SortOrder
  }

  export type RateSumOrderByAggregateInput = {
    id?: SortOrder
    in?: SortOrder
    out?: SortOrder
    reserve?: SortOrder
    officeId?: SortOrder
  }

  export type ExchangeOfficeListRelationFilter = {
    every?: ExchangeOfficeWhereInput
    some?: ExchangeOfficeWhereInput
    none?: ExchangeOfficeWhereInput
  }

  export type ExchangeOfficeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryCreateNestedOneWithoutExchangeOfficeInput = {
    create?: XOR<CountryCreateWithoutExchangeOfficeInput, CountryUncheckedCreateWithoutExchangeOfficeInput>
    connectOrCreate?: CountryCreateOrConnectWithoutExchangeOfficeInput
    connect?: CountryWhereUniqueInput
  }

  export type ExchangeCreateNestedManyWithoutOfficeInput = {
    create?: XOR<Enumerable<ExchangeCreateWithoutOfficeInput>, Enumerable<ExchangeUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<ExchangeCreateOrConnectWithoutOfficeInput>
    createMany?: ExchangeCreateManyOfficeInputEnvelope
    connect?: Enumerable<ExchangeWhereUniqueInput>
  }

  export type RateCreateNestedManyWithoutOfficeInput = {
    create?: XOR<Enumerable<RateCreateWithoutOfficeInput>, Enumerable<RateUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<RateCreateOrConnectWithoutOfficeInput>
    createMany?: RateCreateManyOfficeInputEnvelope
    connect?: Enumerable<RateWhereUniqueInput>
  }

  export type ExchangeUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<Enumerable<ExchangeCreateWithoutOfficeInput>, Enumerable<ExchangeUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<ExchangeCreateOrConnectWithoutOfficeInput>
    createMany?: ExchangeCreateManyOfficeInputEnvelope
    connect?: Enumerable<ExchangeWhereUniqueInput>
  }

  export type RateUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<Enumerable<RateCreateWithoutOfficeInput>, Enumerable<RateUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<RateCreateOrConnectWithoutOfficeInput>
    createMany?: RateCreateManyOfficeInputEnvelope
    connect?: Enumerable<RateWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CountryUpdateOneRequiredWithoutExchangeOfficeNestedInput = {
    create?: XOR<CountryCreateWithoutExchangeOfficeInput, CountryUncheckedCreateWithoutExchangeOfficeInput>
    connectOrCreate?: CountryCreateOrConnectWithoutExchangeOfficeInput
    upsert?: CountryUpsertWithoutExchangeOfficeInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutExchangeOfficeInput, CountryUncheckedUpdateWithoutExchangeOfficeInput>
  }

  export type ExchangeUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<Enumerable<ExchangeCreateWithoutOfficeInput>, Enumerable<ExchangeUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<ExchangeCreateOrConnectWithoutOfficeInput>
    upsert?: Enumerable<ExchangeUpsertWithWhereUniqueWithoutOfficeInput>
    createMany?: ExchangeCreateManyOfficeInputEnvelope
    set?: Enumerable<ExchangeWhereUniqueInput>
    disconnect?: Enumerable<ExchangeWhereUniqueInput>
    delete?: Enumerable<ExchangeWhereUniqueInput>
    connect?: Enumerable<ExchangeWhereUniqueInput>
    update?: Enumerable<ExchangeUpdateWithWhereUniqueWithoutOfficeInput>
    updateMany?: Enumerable<ExchangeUpdateManyWithWhereWithoutOfficeInput>
    deleteMany?: Enumerable<ExchangeScalarWhereInput>
  }

  export type RateUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<Enumerable<RateCreateWithoutOfficeInput>, Enumerable<RateUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<RateCreateOrConnectWithoutOfficeInput>
    upsert?: Enumerable<RateUpsertWithWhereUniqueWithoutOfficeInput>
    createMany?: RateCreateManyOfficeInputEnvelope
    set?: Enumerable<RateWhereUniqueInput>
    disconnect?: Enumerable<RateWhereUniqueInput>
    delete?: Enumerable<RateWhereUniqueInput>
    connect?: Enumerable<RateWhereUniqueInput>
    update?: Enumerable<RateUpdateWithWhereUniqueWithoutOfficeInput>
    updateMany?: Enumerable<RateUpdateManyWithWhereWithoutOfficeInput>
    deleteMany?: Enumerable<RateScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExchangeUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<Enumerable<ExchangeCreateWithoutOfficeInput>, Enumerable<ExchangeUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<ExchangeCreateOrConnectWithoutOfficeInput>
    upsert?: Enumerable<ExchangeUpsertWithWhereUniqueWithoutOfficeInput>
    createMany?: ExchangeCreateManyOfficeInputEnvelope
    set?: Enumerable<ExchangeWhereUniqueInput>
    disconnect?: Enumerable<ExchangeWhereUniqueInput>
    delete?: Enumerable<ExchangeWhereUniqueInput>
    connect?: Enumerable<ExchangeWhereUniqueInput>
    update?: Enumerable<ExchangeUpdateWithWhereUniqueWithoutOfficeInput>
    updateMany?: Enumerable<ExchangeUpdateManyWithWhereWithoutOfficeInput>
    deleteMany?: Enumerable<ExchangeScalarWhereInput>
  }

  export type RateUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<Enumerable<RateCreateWithoutOfficeInput>, Enumerable<RateUncheckedCreateWithoutOfficeInput>>
    connectOrCreate?: Enumerable<RateCreateOrConnectWithoutOfficeInput>
    upsert?: Enumerable<RateUpsertWithWhereUniqueWithoutOfficeInput>
    createMany?: RateCreateManyOfficeInputEnvelope
    set?: Enumerable<RateWhereUniqueInput>
    disconnect?: Enumerable<RateWhereUniqueInput>
    delete?: Enumerable<RateWhereUniqueInput>
    connect?: Enumerable<RateWhereUniqueInput>
    update?: Enumerable<RateUpdateWithWhereUniqueWithoutOfficeInput>
    updateMany?: Enumerable<RateUpdateManyWithWhereWithoutOfficeInput>
    deleteMany?: Enumerable<RateScalarWhereInput>
  }

  export type ExchangeOfficeCreateNestedOneWithoutExchangesInput = {
    create?: XOR<ExchangeOfficeCreateWithoutExchangesInput, ExchangeOfficeUncheckedCreateWithoutExchangesInput>
    connectOrCreate?: ExchangeOfficeCreateOrConnectWithoutExchangesInput
    connect?: ExchangeOfficeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExchangeOfficeUpdateOneRequiredWithoutExchangesNestedInput = {
    create?: XOR<ExchangeOfficeCreateWithoutExchangesInput, ExchangeOfficeUncheckedCreateWithoutExchangesInput>
    connectOrCreate?: ExchangeOfficeCreateOrConnectWithoutExchangesInput
    upsert?: ExchangeOfficeUpsertWithoutExchangesInput
    connect?: ExchangeOfficeWhereUniqueInput
    update?: XOR<ExchangeOfficeUpdateWithoutExchangesInput, ExchangeOfficeUncheckedUpdateWithoutExchangesInput>
  }

  export type ExchangeOfficeCreateNestedOneWithoutRatesInput = {
    create?: XOR<ExchangeOfficeCreateWithoutRatesInput, ExchangeOfficeUncheckedCreateWithoutRatesInput>
    connectOrCreate?: ExchangeOfficeCreateOrConnectWithoutRatesInput
    connect?: ExchangeOfficeWhereUniqueInput
  }

  export type ExchangeOfficeUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<ExchangeOfficeCreateWithoutRatesInput, ExchangeOfficeUncheckedCreateWithoutRatesInput>
    connectOrCreate?: ExchangeOfficeCreateOrConnectWithoutRatesInput
    upsert?: ExchangeOfficeUpsertWithoutRatesInput
    connect?: ExchangeOfficeWhereUniqueInput
    update?: XOR<ExchangeOfficeUpdateWithoutRatesInput, ExchangeOfficeUncheckedUpdateWithoutRatesInput>
  }

  export type ExchangeOfficeCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<ExchangeOfficeCreateWithoutCountryInput>, Enumerable<ExchangeOfficeUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ExchangeOfficeCreateOrConnectWithoutCountryInput>
    createMany?: ExchangeOfficeCreateManyCountryInputEnvelope
    connect?: Enumerable<ExchangeOfficeWhereUniqueInput>
  }

  export type ExchangeOfficeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<ExchangeOfficeCreateWithoutCountryInput>, Enumerable<ExchangeOfficeUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ExchangeOfficeCreateOrConnectWithoutCountryInput>
    createMany?: ExchangeOfficeCreateManyCountryInputEnvelope
    connect?: Enumerable<ExchangeOfficeWhereUniqueInput>
  }

  export type ExchangeOfficeUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<ExchangeOfficeCreateWithoutCountryInput>, Enumerable<ExchangeOfficeUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ExchangeOfficeCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<ExchangeOfficeUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: ExchangeOfficeCreateManyCountryInputEnvelope
    set?: Enumerable<ExchangeOfficeWhereUniqueInput>
    disconnect?: Enumerable<ExchangeOfficeWhereUniqueInput>
    delete?: Enumerable<ExchangeOfficeWhereUniqueInput>
    connect?: Enumerable<ExchangeOfficeWhereUniqueInput>
    update?: Enumerable<ExchangeOfficeUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<ExchangeOfficeUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<ExchangeOfficeScalarWhereInput>
  }

  export type ExchangeOfficeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<ExchangeOfficeCreateWithoutCountryInput>, Enumerable<ExchangeOfficeUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ExchangeOfficeCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<ExchangeOfficeUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: ExchangeOfficeCreateManyCountryInputEnvelope
    set?: Enumerable<ExchangeOfficeWhereUniqueInput>
    disconnect?: Enumerable<ExchangeOfficeWhereUniqueInput>
    delete?: Enumerable<ExchangeOfficeWhereUniqueInput>
    connect?: Enumerable<ExchangeOfficeWhereUniqueInput>
    update?: Enumerable<ExchangeOfficeUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<ExchangeOfficeUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<ExchangeOfficeScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CountryCreateWithoutExchangeOfficeInput = {
    code: string
    name: string
  }

  export type CountryUncheckedCreateWithoutExchangeOfficeInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryCreateOrConnectWithoutExchangeOfficeInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutExchangeOfficeInput, CountryUncheckedCreateWithoutExchangeOfficeInput>
  }

  export type ExchangeCreateWithoutOfficeInput = {
    from: string
    to: string
    ask: number
    date: Date | string
  }

  export type ExchangeUncheckedCreateWithoutOfficeInput = {
    id?: number
    from: string
    to: string
    ask: number
    date: Date | string
  }

  export type ExchangeCreateOrConnectWithoutOfficeInput = {
    where: ExchangeWhereUniqueInput
    create: XOR<ExchangeCreateWithoutOfficeInput, ExchangeUncheckedCreateWithoutOfficeInput>
  }

  export type ExchangeCreateManyOfficeInputEnvelope = {
    data: Enumerable<ExchangeCreateManyOfficeInput>
    skipDuplicates?: boolean
  }

  export type RateCreateWithoutOfficeInput = {
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date | string
  }

  export type RateUncheckedCreateWithoutOfficeInput = {
    id?: number
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date | string
  }

  export type RateCreateOrConnectWithoutOfficeInput = {
    where: RateWhereUniqueInput
    create: XOR<RateCreateWithoutOfficeInput, RateUncheckedCreateWithoutOfficeInput>
  }

  export type RateCreateManyOfficeInputEnvelope = {
    data: Enumerable<RateCreateManyOfficeInput>
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutExchangeOfficeInput = {
    update: XOR<CountryUpdateWithoutExchangeOfficeInput, CountryUncheckedUpdateWithoutExchangeOfficeInput>
    create: XOR<CountryCreateWithoutExchangeOfficeInput, CountryUncheckedCreateWithoutExchangeOfficeInput>
  }

  export type CountryUpdateWithoutExchangeOfficeInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutExchangeOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExchangeUpsertWithWhereUniqueWithoutOfficeInput = {
    where: ExchangeWhereUniqueInput
    update: XOR<ExchangeUpdateWithoutOfficeInput, ExchangeUncheckedUpdateWithoutOfficeInput>
    create: XOR<ExchangeCreateWithoutOfficeInput, ExchangeUncheckedCreateWithoutOfficeInput>
  }

  export type ExchangeUpdateWithWhereUniqueWithoutOfficeInput = {
    where: ExchangeWhereUniqueInput
    data: XOR<ExchangeUpdateWithoutOfficeInput, ExchangeUncheckedUpdateWithoutOfficeInput>
  }

  export type ExchangeUpdateManyWithWhereWithoutOfficeInput = {
    where: ExchangeScalarWhereInput
    data: XOR<ExchangeUpdateManyMutationInput, ExchangeUncheckedUpdateManyWithoutExchangesInput>
  }

  export type ExchangeScalarWhereInput = {
    AND?: Enumerable<ExchangeScalarWhereInput>
    OR?: Enumerable<ExchangeScalarWhereInput>
    NOT?: Enumerable<ExchangeScalarWhereInput>
    id?: IntFilter | number
    from?: StringFilter | string
    to?: StringFilter | string
    ask?: FloatFilter | number
    date?: DateTimeFilter | Date | string
    officeId?: IntFilter | number
  }

  export type RateUpsertWithWhereUniqueWithoutOfficeInput = {
    where: RateWhereUniqueInput
    update: XOR<RateUpdateWithoutOfficeInput, RateUncheckedUpdateWithoutOfficeInput>
    create: XOR<RateCreateWithoutOfficeInput, RateUncheckedCreateWithoutOfficeInput>
  }

  export type RateUpdateWithWhereUniqueWithoutOfficeInput = {
    where: RateWhereUniqueInput
    data: XOR<RateUpdateWithoutOfficeInput, RateUncheckedUpdateWithoutOfficeInput>
  }

  export type RateUpdateManyWithWhereWithoutOfficeInput = {
    where: RateScalarWhereInput
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyWithoutRatesInput>
  }

  export type RateScalarWhereInput = {
    AND?: Enumerable<RateScalarWhereInput>
    OR?: Enumerable<RateScalarWhereInput>
    NOT?: Enumerable<RateScalarWhereInput>
    id?: IntFilter | number
    from?: StringFilter | string
    to?: StringFilter | string
    in?: FloatFilter | number
    out?: FloatFilter | number
    reserve?: IntFilter | number
    date?: DateTimeFilter | Date | string
    officeId?: IntFilter | number
  }

  export type ExchangeOfficeCreateWithoutExchangesInput = {
    name: string
    country: CountryCreateNestedOneWithoutExchangeOfficeInput
    rates?: RateCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeUncheckedCreateWithoutExchangesInput = {
    id?: number
    name: string
    countryId: number
    rates?: RateUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeCreateOrConnectWithoutExchangesInput = {
    where: ExchangeOfficeWhereUniqueInput
    create: XOR<ExchangeOfficeCreateWithoutExchangesInput, ExchangeOfficeUncheckedCreateWithoutExchangesInput>
  }

  export type ExchangeOfficeUpsertWithoutExchangesInput = {
    update: XOR<ExchangeOfficeUpdateWithoutExchangesInput, ExchangeOfficeUncheckedUpdateWithoutExchangesInput>
    create: XOR<ExchangeOfficeCreateWithoutExchangesInput, ExchangeOfficeUncheckedCreateWithoutExchangesInput>
  }

  export type ExchangeOfficeUpdateWithoutExchangesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutExchangeOfficeNestedInput
    rates?: RateUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeUncheckedUpdateWithoutExchangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    rates?: RateUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeCreateWithoutRatesInput = {
    name: string
    country: CountryCreateNestedOneWithoutExchangeOfficeInput
    exchanges?: ExchangeCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeUncheckedCreateWithoutRatesInput = {
    id?: number
    name: string
    countryId: number
    exchanges?: ExchangeUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeCreateOrConnectWithoutRatesInput = {
    where: ExchangeOfficeWhereUniqueInput
    create: XOR<ExchangeOfficeCreateWithoutRatesInput, ExchangeOfficeUncheckedCreateWithoutRatesInput>
  }

  export type ExchangeOfficeUpsertWithoutRatesInput = {
    update: XOR<ExchangeOfficeUpdateWithoutRatesInput, ExchangeOfficeUncheckedUpdateWithoutRatesInput>
    create: XOR<ExchangeOfficeCreateWithoutRatesInput, ExchangeOfficeUncheckedCreateWithoutRatesInput>
  }

  export type ExchangeOfficeUpdateWithoutRatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutExchangeOfficeNestedInput
    exchanges?: ExchangeUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeUncheckedUpdateWithoutRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    exchanges?: ExchangeUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeCreateWithoutCountryInput = {
    name: string
    exchanges?: ExchangeCreateNestedManyWithoutOfficeInput
    rates?: RateCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    exchanges?: ExchangeUncheckedCreateNestedManyWithoutOfficeInput
    rates?: RateUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type ExchangeOfficeCreateOrConnectWithoutCountryInput = {
    where: ExchangeOfficeWhereUniqueInput
    create: XOR<ExchangeOfficeCreateWithoutCountryInput, ExchangeOfficeUncheckedCreateWithoutCountryInput>
  }

  export type ExchangeOfficeCreateManyCountryInputEnvelope = {
    data: Enumerable<ExchangeOfficeCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type ExchangeOfficeUpsertWithWhereUniqueWithoutCountryInput = {
    where: ExchangeOfficeWhereUniqueInput
    update: XOR<ExchangeOfficeUpdateWithoutCountryInput, ExchangeOfficeUncheckedUpdateWithoutCountryInput>
    create: XOR<ExchangeOfficeCreateWithoutCountryInput, ExchangeOfficeUncheckedCreateWithoutCountryInput>
  }

  export type ExchangeOfficeUpdateWithWhereUniqueWithoutCountryInput = {
    where: ExchangeOfficeWhereUniqueInput
    data: XOR<ExchangeOfficeUpdateWithoutCountryInput, ExchangeOfficeUncheckedUpdateWithoutCountryInput>
  }

  export type ExchangeOfficeUpdateManyWithWhereWithoutCountryInput = {
    where: ExchangeOfficeScalarWhereInput
    data: XOR<ExchangeOfficeUpdateManyMutationInput, ExchangeOfficeUncheckedUpdateManyWithoutExchangeOfficeInput>
  }

  export type ExchangeOfficeScalarWhereInput = {
    AND?: Enumerable<ExchangeOfficeScalarWhereInput>
    OR?: Enumerable<ExchangeOfficeScalarWhereInput>
    NOT?: Enumerable<ExchangeOfficeScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    countryId?: IntFilter | number
  }

  export type ExchangeCreateManyOfficeInput = {
    id?: number
    from: string
    to: string
    ask: number
    date: Date | string
  }

  export type RateCreateManyOfficeInput = {
    id?: number
    from: string
    to: string
    in: number
    out: number
    reserve: number
    date: Date | string
  }

  export type ExchangeUpdateWithoutOfficeInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUncheckedUpdateWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUncheckedUpdateManyWithoutExchangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    ask?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateUpdateWithoutOfficeInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateUncheckedUpdateWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateUncheckedUpdateManyWithoutRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    in?: FloatFieldUpdateOperationsInput | number
    out?: FloatFieldUpdateOperationsInput | number
    reserve?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeOfficeCreateManyCountryInput = {
    id?: number
    name: string
  }

  export type ExchangeOfficeUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    exchanges?: ExchangeUpdateManyWithoutOfficeNestedInput
    rates?: RateUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    exchanges?: ExchangeUncheckedUpdateManyWithoutOfficeNestedInput
    rates?: RateUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type ExchangeOfficeUncheckedUpdateManyWithoutExchangeOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}