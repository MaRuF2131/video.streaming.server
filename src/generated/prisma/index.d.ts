
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RoomTable
 * 
 */
export type RoomTable = $Result.DefaultSelection<Prisma.$RoomTablePayload>
/**
 * Model UploadTable
 * 
 */
export type UploadTable = $Result.DefaultSelection<Prisma.$UploadTablePayload>
/**
 * Model ChatList
 * 
 */
export type ChatList = $Result.DefaultSelection<Prisma.$ChatListPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomTable`: Exposes CRUD operations for the **RoomTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTables
    * const roomTables = await prisma.roomTable.findMany()
    * ```
    */
  get roomTable(): Prisma.RoomTableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadTable`: Exposes CRUD operations for the **UploadTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadTables
    * const uploadTables = await prisma.uploadTable.findMany()
    * ```
    */
  get uploadTable(): Prisma.UploadTableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatList`: Exposes CRUD operations for the **ChatList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatLists
    * const chatLists = await prisma.chatList.findMany()
    * ```
    */
  get chatList(): Prisma.ChatListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RoomTable: 'RoomTable',
    UploadTable: 'UploadTable',
    ChatList: 'ChatList',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "roomTable" | "uploadTable" | "chatList" | "message"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RoomTable: {
        payload: Prisma.$RoomTablePayload<ExtArgs>
        fields: Prisma.RoomTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>
          }
          findFirst: {
            args: Prisma.RoomTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>
          }
          findMany: {
            args: Prisma.RoomTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>[]
          }
          create: {
            args: Prisma.RoomTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>
          }
          createMany: {
            args: Prisma.RoomTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>
          }
          update: {
            args: Prisma.RoomTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>
          }
          deleteMany: {
            args: Prisma.RoomTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTablePayload>
          }
          aggregate: {
            args: Prisma.RoomTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomTable>
          }
          groupBy: {
            args: Prisma.RoomTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTableGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoomTableFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoomTableAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoomTableCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTableCountAggregateOutputType> | number
          }
        }
      }
      UploadTable: {
        payload: Prisma.$UploadTablePayload<ExtArgs>
        fields: Prisma.UploadTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>
          }
          findFirst: {
            args: Prisma.UploadTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>
          }
          findMany: {
            args: Prisma.UploadTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>[]
          }
          create: {
            args: Prisma.UploadTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>
          }
          createMany: {
            args: Prisma.UploadTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UploadTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>
          }
          update: {
            args: Prisma.UploadTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>
          }
          deleteMany: {
            args: Prisma.UploadTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UploadTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTablePayload>
          }
          aggregate: {
            args: Prisma.UploadTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadTable>
          }
          groupBy: {
            args: Prisma.UploadTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadTableGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UploadTableFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UploadTableAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UploadTableCountArgs<ExtArgs>
            result: $Utils.Optional<UploadTableCountAggregateOutputType> | number
          }
        }
      }
      ChatList: {
        payload: Prisma.$ChatListPayload<ExtArgs>
        fields: Prisma.ChatListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>
          }
          findFirst: {
            args: Prisma.ChatListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>
          }
          findMany: {
            args: Prisma.ChatListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>[]
          }
          create: {
            args: Prisma.ChatListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>
          }
          createMany: {
            args: Prisma.ChatListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>
          }
          update: {
            args: Prisma.ChatListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>
          }
          deleteMany: {
            args: Prisma.ChatListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatListPayload>
          }
          aggregate: {
            args: Prisma.ChatListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatList>
          }
          groupBy: {
            args: Prisma.ChatListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatListGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatListFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatListAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChatListCountArgs<ExtArgs>
            result: $Utils.Optional<ChatListCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    roomTable?: RoomTableOmit
    uploadTable?: UploadTableOmit
    chatList?: ChatListOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roomTables: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomTables?: boolean | UserCountOutputTypeCountRoomTablesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTableWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type RoomTableCountOutputType
   */

  export type RoomTableCountOutputType = {
    uploadTables: number
  }

  export type RoomTableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadTables?: boolean | RoomTableCountOutputTypeCountUploadTablesArgs
  }

  // Custom InputTypes
  /**
   * RoomTableCountOutputType without action
   */
  export type RoomTableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTableCountOutputType
     */
    select?: RoomTableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomTableCountOutputType without action
   */
  export type RoomTableCountOutputTypeCountUploadTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadTableWhereInput
  }


  /**
   * Count Type ChatListCountOutputType
   */

  export type ChatListCountOutputType = {
    messages: number
  }

  export type ChatListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatListCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatListCountOutputType without action
   */
  export type ChatListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatListCountOutputType
     */
    select?: ChatListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatListCountOutputType without action
   */
  export type ChatListCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    photoUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    photoUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    photoUrl: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    photoUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    photoUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    photoUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    photoUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    roomTables?: boolean | User$roomTablesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    photoUrl?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "photoUrl" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomTables?: boolean | User$roomTablesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roomTables: Prisma.$RoomTablePayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      photoUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomTables<T extends User$roomTablesArgs<ExtArgs> = {}>(args?: Subset<T, User$roomTablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.roomTables
   */
  export type User$roomTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    where?: RoomTableWhereInput
    orderBy?: RoomTableOrderByWithRelationInput | RoomTableOrderByWithRelationInput[]
    cursor?: RoomTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTableScalarFieldEnum | RoomTableScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RoomTable
   */

  export type AggregateRoomTable = {
    _count: RoomTableCountAggregateOutputType | null
    _min: RoomTableMinAggregateOutputType | null
    _max: RoomTableMaxAggregateOutputType | null
  }

  export type RoomTableMinAggregateOutputType = {
    id: string | null
    category: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type RoomTableMaxAggregateOutputType = {
    id: string | null
    category: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type RoomTableCountAggregateOutputType = {
    id: number
    category: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type RoomTableMinAggregateInputType = {
    id?: true
    category?: true
    createdById?: true
    createdAt?: true
  }

  export type RoomTableMaxAggregateInputType = {
    id?: true
    category?: true
    createdById?: true
    createdAt?: true
  }

  export type RoomTableCountAggregateInputType = {
    id?: true
    category?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type RoomTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTable to aggregate.
     */
    where?: RoomTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTables to fetch.
     */
    orderBy?: RoomTableOrderByWithRelationInput | RoomTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTables
    **/
    _count?: true | RoomTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTableMaxAggregateInputType
  }

  export type GetRoomTableAggregateType<T extends RoomTableAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomTable[P]>
      : GetScalarType<T[P], AggregateRoomTable[P]>
  }




  export type RoomTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTableWhereInput
    orderBy?: RoomTableOrderByWithAggregationInput | RoomTableOrderByWithAggregationInput[]
    by: RoomTableScalarFieldEnum[] | RoomTableScalarFieldEnum
    having?: RoomTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTableCountAggregateInputType | true
    _min?: RoomTableMinAggregateInputType
    _max?: RoomTableMaxAggregateInputType
  }

  export type RoomTableGroupByOutputType = {
    id: string
    category: string
    createdById: string
    createdAt: Date
    _count: RoomTableCountAggregateOutputType | null
    _min: RoomTableMinAggregateOutputType | null
    _max: RoomTableMaxAggregateOutputType | null
  }

  type GetRoomTableGroupByPayload<T extends RoomTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTableGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTableGroupByOutputType[P]>
        }
      >
    >


  export type RoomTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    uploadTables?: boolean | RoomTable$uploadTablesArgs<ExtArgs>
    _count?: boolean | RoomTableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTable"]>



  export type RoomTableSelectScalar = {
    id?: boolean
    category?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type RoomTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "createdById" | "createdAt", ExtArgs["result"]["roomTable"]>
  export type RoomTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    uploadTables?: boolean | RoomTable$uploadTablesArgs<ExtArgs>
    _count?: boolean | RoomTableCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomTable"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      uploadTables: Prisma.$UploadTablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["roomTable"]>
    composites: {}
  }

  type RoomTableGetPayload<S extends boolean | null | undefined | RoomTableDefaultArgs> = $Result.GetResult<Prisma.$RoomTablePayload, S>

  type RoomTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTableCountAggregateInputType | true
    }

  export interface RoomTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomTable'], meta: { name: 'RoomTable' } }
    /**
     * Find zero or one RoomTable that matches the filter.
     * @param {RoomTableFindUniqueArgs} args - Arguments to find a RoomTable
     * @example
     * // Get one RoomTable
     * const roomTable = await prisma.roomTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTableFindUniqueArgs>(args: SelectSubset<T, RoomTableFindUniqueArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTableFindUniqueOrThrowArgs} args - Arguments to find a RoomTable
     * @example
     * // Get one RoomTable
     * const roomTable = await prisma.roomTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTableFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableFindFirstArgs} args - Arguments to find a RoomTable
     * @example
     * // Get one RoomTable
     * const roomTable = await prisma.roomTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTableFindFirstArgs>(args?: SelectSubset<T, RoomTableFindFirstArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableFindFirstOrThrowArgs} args - Arguments to find a RoomTable
     * @example
     * // Get one RoomTable
     * const roomTable = await prisma.roomTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTableFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTables
     * const roomTables = await prisma.roomTable.findMany()
     * 
     * // Get first 10 RoomTables
     * const roomTables = await prisma.roomTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTableWithIdOnly = await prisma.roomTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTableFindManyArgs>(args?: SelectSubset<T, RoomTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomTable.
     * @param {RoomTableCreateArgs} args - Arguments to create a RoomTable.
     * @example
     * // Create one RoomTable
     * const RoomTable = await prisma.roomTable.create({
     *   data: {
     *     // ... data to create a RoomTable
     *   }
     * })
     * 
     */
    create<T extends RoomTableCreateArgs>(args: SelectSubset<T, RoomTableCreateArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTables.
     * @param {RoomTableCreateManyArgs} args - Arguments to create many RoomTables.
     * @example
     * // Create many RoomTables
     * const roomTable = await prisma.roomTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTableCreateManyArgs>(args?: SelectSubset<T, RoomTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomTable.
     * @param {RoomTableDeleteArgs} args - Arguments to delete one RoomTable.
     * @example
     * // Delete one RoomTable
     * const RoomTable = await prisma.roomTable.delete({
     *   where: {
     *     // ... filter to delete one RoomTable
     *   }
     * })
     * 
     */
    delete<T extends RoomTableDeleteArgs>(args: SelectSubset<T, RoomTableDeleteArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomTable.
     * @param {RoomTableUpdateArgs} args - Arguments to update one RoomTable.
     * @example
     * // Update one RoomTable
     * const roomTable = await prisma.roomTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTableUpdateArgs>(args: SelectSubset<T, RoomTableUpdateArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTables.
     * @param {RoomTableDeleteManyArgs} args - Arguments to filter RoomTables to delete.
     * @example
     * // Delete a few RoomTables
     * const { count } = await prisma.roomTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTableDeleteManyArgs>(args?: SelectSubset<T, RoomTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTables
     * const roomTable = await prisma.roomTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTableUpdateManyArgs>(args: SelectSubset<T, RoomTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomTable.
     * @param {RoomTableUpsertArgs} args - Arguments to update or create a RoomTable.
     * @example
     * // Update or create a RoomTable
     * const roomTable = await prisma.roomTable.upsert({
     *   create: {
     *     // ... data to create a RoomTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomTable we want to update
     *   }
     * })
     */
    upsert<T extends RoomTableUpsertArgs>(args: SelectSubset<T, RoomTableUpsertArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTables that matches the filter.
     * @param {RoomTableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const roomTable = await prisma.roomTable.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoomTableFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RoomTable.
     * @param {RoomTableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const roomTable = await prisma.roomTable.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoomTableAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RoomTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableCountArgs} args - Arguments to filter RoomTables to count.
     * @example
     * // Count the number of RoomTables
     * const count = await prisma.roomTable.count({
     *   where: {
     *     // ... the filter for the RoomTables we want to count
     *   }
     * })
    **/
    count<T extends RoomTableCountArgs>(
      args?: Subset<T, RoomTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomTableAggregateArgs>(args: Subset<T, RoomTableAggregateArgs>): Prisma.PrismaPromise<GetRoomTableAggregateType<T>>

    /**
     * Group by RoomTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTableGroupByArgs} args - Group by arguments.
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
      T extends RoomTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTableGroupByArgs['orderBy'] }
        : { orderBy?: RoomTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoomTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomTable model
   */
  readonly fields: RoomTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadTables<T extends RoomTable$uploadTablesArgs<ExtArgs> = {}>(args?: Subset<T, RoomTable$uploadTablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomTable model
   */
  interface RoomTableFieldRefs {
    readonly id: FieldRef<"RoomTable", 'String'>
    readonly category: FieldRef<"RoomTable", 'String'>
    readonly createdById: FieldRef<"RoomTable", 'String'>
    readonly createdAt: FieldRef<"RoomTable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomTable findUnique
   */
  export type RoomTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * Filter, which RoomTable to fetch.
     */
    where: RoomTableWhereUniqueInput
  }

  /**
   * RoomTable findUniqueOrThrow
   */
  export type RoomTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * Filter, which RoomTable to fetch.
     */
    where: RoomTableWhereUniqueInput
  }

  /**
   * RoomTable findFirst
   */
  export type RoomTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * Filter, which RoomTable to fetch.
     */
    where?: RoomTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTables to fetch.
     */
    orderBy?: RoomTableOrderByWithRelationInput | RoomTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTables.
     */
    cursor?: RoomTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTables.
     */
    distinct?: RoomTableScalarFieldEnum | RoomTableScalarFieldEnum[]
  }

  /**
   * RoomTable findFirstOrThrow
   */
  export type RoomTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * Filter, which RoomTable to fetch.
     */
    where?: RoomTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTables to fetch.
     */
    orderBy?: RoomTableOrderByWithRelationInput | RoomTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTables.
     */
    cursor?: RoomTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTables.
     */
    distinct?: RoomTableScalarFieldEnum | RoomTableScalarFieldEnum[]
  }

  /**
   * RoomTable findMany
   */
  export type RoomTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * Filter, which RoomTables to fetch.
     */
    where?: RoomTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTables to fetch.
     */
    orderBy?: RoomTableOrderByWithRelationInput | RoomTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTables.
     */
    cursor?: RoomTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTables.
     */
    skip?: number
    distinct?: RoomTableScalarFieldEnum | RoomTableScalarFieldEnum[]
  }

  /**
   * RoomTable create
   */
  export type RoomTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomTable.
     */
    data: XOR<RoomTableCreateInput, RoomTableUncheckedCreateInput>
  }

  /**
   * RoomTable createMany
   */
  export type RoomTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTables.
     */
    data: RoomTableCreateManyInput | RoomTableCreateManyInput[]
  }

  /**
   * RoomTable update
   */
  export type RoomTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomTable.
     */
    data: XOR<RoomTableUpdateInput, RoomTableUncheckedUpdateInput>
    /**
     * Choose, which RoomTable to update.
     */
    where: RoomTableWhereUniqueInput
  }

  /**
   * RoomTable updateMany
   */
  export type RoomTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTables.
     */
    data: XOR<RoomTableUpdateManyMutationInput, RoomTableUncheckedUpdateManyInput>
    /**
     * Filter which RoomTables to update
     */
    where?: RoomTableWhereInput
    /**
     * Limit how many RoomTables to update.
     */
    limit?: number
  }

  /**
   * RoomTable upsert
   */
  export type RoomTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomTable to update in case it exists.
     */
    where: RoomTableWhereUniqueInput
    /**
     * In case the RoomTable found by the `where` argument doesn't exist, create a new RoomTable with this data.
     */
    create: XOR<RoomTableCreateInput, RoomTableUncheckedCreateInput>
    /**
     * In case the RoomTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTableUpdateInput, RoomTableUncheckedUpdateInput>
  }

  /**
   * RoomTable delete
   */
  export type RoomTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
    /**
     * Filter which RoomTable to delete.
     */
    where: RoomTableWhereUniqueInput
  }

  /**
   * RoomTable deleteMany
   */
  export type RoomTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTables to delete
     */
    where?: RoomTableWhereInput
    /**
     * Limit how many RoomTables to delete.
     */
    limit?: number
  }

  /**
   * RoomTable findRaw
   */
  export type RoomTableFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoomTable aggregateRaw
   */
  export type RoomTableAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoomTable.uploadTables
   */
  export type RoomTable$uploadTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    where?: UploadTableWhereInput
    orderBy?: UploadTableOrderByWithRelationInput | UploadTableOrderByWithRelationInput[]
    cursor?: UploadTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadTableScalarFieldEnum | UploadTableScalarFieldEnum[]
  }

  /**
   * RoomTable without action
   */
  export type RoomTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTable
     */
    select?: RoomTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTable
     */
    omit?: RoomTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTableInclude<ExtArgs> | null
  }


  /**
   * Model UploadTable
   */

  export type AggregateUploadTable = {
    _count: UploadTableCountAggregateOutputType | null
    _avg: UploadTableAvgAggregateOutputType | null
    _sum: UploadTableSumAggregateOutputType | null
    _min: UploadTableMinAggregateOutputType | null
    _max: UploadTableMaxAggregateOutputType | null
  }

  export type UploadTableAvgAggregateOutputType = {
    rating: number | null
  }

  export type UploadTableSumAggregateOutputType = {
    rating: number | null
  }

  export type UploadTableMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    description: string | null
    chatListId: string | null
    roomTableId: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type UploadTableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    description: string | null
    chatListId: string | null
    roomTableId: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type UploadTableCountAggregateOutputType = {
    id: number
    name: number
    title: number
    description: number
    videoFilesList: number
    chatListId: number
    roomTableId: number
    rating: number
    createdAt: number
    _all: number
  }


  export type UploadTableAvgAggregateInputType = {
    rating?: true
  }

  export type UploadTableSumAggregateInputType = {
    rating?: true
  }

  export type UploadTableMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    description?: true
    chatListId?: true
    roomTableId?: true
    rating?: true
    createdAt?: true
  }

  export type UploadTableMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    description?: true
    chatListId?: true
    roomTableId?: true
    rating?: true
    createdAt?: true
  }

  export type UploadTableCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    description?: true
    videoFilesList?: true
    chatListId?: true
    roomTableId?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type UploadTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadTable to aggregate.
     */
    where?: UploadTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTables to fetch.
     */
    orderBy?: UploadTableOrderByWithRelationInput | UploadTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadTables
    **/
    _count?: true | UploadTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadTableMaxAggregateInputType
  }

  export type GetUploadTableAggregateType<T extends UploadTableAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadTable[P]>
      : GetScalarType<T[P], AggregateUploadTable[P]>
  }




  export type UploadTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadTableWhereInput
    orderBy?: UploadTableOrderByWithAggregationInput | UploadTableOrderByWithAggregationInput[]
    by: UploadTableScalarFieldEnum[] | UploadTableScalarFieldEnum
    having?: UploadTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadTableCountAggregateInputType | true
    _avg?: UploadTableAvgAggregateInputType
    _sum?: UploadTableSumAggregateInputType
    _min?: UploadTableMinAggregateInputType
    _max?: UploadTableMaxAggregateInputType
  }

  export type UploadTableGroupByOutputType = {
    id: string
    name: string
    title: string
    description: string
    videoFilesList: string[]
    chatListId: string | null
    roomTableId: string
    rating: number | null
    createdAt: Date
    _count: UploadTableCountAggregateOutputType | null
    _avg: UploadTableAvgAggregateOutputType | null
    _sum: UploadTableSumAggregateOutputType | null
    _min: UploadTableMinAggregateOutputType | null
    _max: UploadTableMaxAggregateOutputType | null
  }

  type GetUploadTableGroupByPayload<T extends UploadTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadTableGroupByOutputType[P]>
            : GetScalarType<T[P], UploadTableGroupByOutputType[P]>
        }
      >
    >


  export type UploadTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    videoFilesList?: boolean
    chatListId?: boolean
    roomTableId?: boolean
    rating?: boolean
    createdAt?: boolean
    chatList?: boolean | UploadTable$chatListArgs<ExtArgs>
    roomTable?: boolean | RoomTableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadTable"]>



  export type UploadTableSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    videoFilesList?: boolean
    chatListId?: boolean
    roomTableId?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type UploadTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "description" | "videoFilesList" | "chatListId" | "roomTableId" | "rating" | "createdAt", ExtArgs["result"]["uploadTable"]>
  export type UploadTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatList?: boolean | UploadTable$chatListArgs<ExtArgs>
    roomTable?: boolean | RoomTableDefaultArgs<ExtArgs>
  }

  export type $UploadTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadTable"
    objects: {
      chatList: Prisma.$ChatListPayload<ExtArgs> | null
      roomTable: Prisma.$RoomTablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string
      description: string
      videoFilesList: string[]
      chatListId: string | null
      roomTableId: string
      rating: number | null
      createdAt: Date
    }, ExtArgs["result"]["uploadTable"]>
    composites: {}
  }

  type UploadTableGetPayload<S extends boolean | null | undefined | UploadTableDefaultArgs> = $Result.GetResult<Prisma.$UploadTablePayload, S>

  type UploadTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadTableCountAggregateInputType | true
    }

  export interface UploadTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadTable'], meta: { name: 'UploadTable' } }
    /**
     * Find zero or one UploadTable that matches the filter.
     * @param {UploadTableFindUniqueArgs} args - Arguments to find a UploadTable
     * @example
     * // Get one UploadTable
     * const uploadTable = await prisma.uploadTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadTableFindUniqueArgs>(args: SelectSubset<T, UploadTableFindUniqueArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadTableFindUniqueOrThrowArgs} args - Arguments to find a UploadTable
     * @example
     * // Get one UploadTable
     * const uploadTable = await prisma.uploadTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadTableFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableFindFirstArgs} args - Arguments to find a UploadTable
     * @example
     * // Get one UploadTable
     * const uploadTable = await prisma.uploadTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadTableFindFirstArgs>(args?: SelectSubset<T, UploadTableFindFirstArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableFindFirstOrThrowArgs} args - Arguments to find a UploadTable
     * @example
     * // Get one UploadTable
     * const uploadTable = await prisma.uploadTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadTableFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadTables
     * const uploadTables = await prisma.uploadTable.findMany()
     * 
     * // Get first 10 UploadTables
     * const uploadTables = await prisma.uploadTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadTableWithIdOnly = await prisma.uploadTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadTableFindManyArgs>(args?: SelectSubset<T, UploadTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadTable.
     * @param {UploadTableCreateArgs} args - Arguments to create a UploadTable.
     * @example
     * // Create one UploadTable
     * const UploadTable = await prisma.uploadTable.create({
     *   data: {
     *     // ... data to create a UploadTable
     *   }
     * })
     * 
     */
    create<T extends UploadTableCreateArgs>(args: SelectSubset<T, UploadTableCreateArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadTables.
     * @param {UploadTableCreateManyArgs} args - Arguments to create many UploadTables.
     * @example
     * // Create many UploadTables
     * const uploadTable = await prisma.uploadTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadTableCreateManyArgs>(args?: SelectSubset<T, UploadTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UploadTable.
     * @param {UploadTableDeleteArgs} args - Arguments to delete one UploadTable.
     * @example
     * // Delete one UploadTable
     * const UploadTable = await prisma.uploadTable.delete({
     *   where: {
     *     // ... filter to delete one UploadTable
     *   }
     * })
     * 
     */
    delete<T extends UploadTableDeleteArgs>(args: SelectSubset<T, UploadTableDeleteArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadTable.
     * @param {UploadTableUpdateArgs} args - Arguments to update one UploadTable.
     * @example
     * // Update one UploadTable
     * const uploadTable = await prisma.uploadTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadTableUpdateArgs>(args: SelectSubset<T, UploadTableUpdateArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadTables.
     * @param {UploadTableDeleteManyArgs} args - Arguments to filter UploadTables to delete.
     * @example
     * // Delete a few UploadTables
     * const { count } = await prisma.uploadTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadTableDeleteManyArgs>(args?: SelectSubset<T, UploadTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadTables
     * const uploadTable = await prisma.uploadTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadTableUpdateManyArgs>(args: SelectSubset<T, UploadTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UploadTable.
     * @param {UploadTableUpsertArgs} args - Arguments to update or create a UploadTable.
     * @example
     * // Update or create a UploadTable
     * const uploadTable = await prisma.uploadTable.upsert({
     *   create: {
     *     // ... data to create a UploadTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadTable we want to update
     *   }
     * })
     */
    upsert<T extends UploadTableUpsertArgs>(args: SelectSubset<T, UploadTableUpsertArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadTables that matches the filter.
     * @param {UploadTableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const uploadTable = await prisma.uploadTable.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UploadTableFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UploadTable.
     * @param {UploadTableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const uploadTable = await prisma.uploadTable.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UploadTableAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UploadTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableCountArgs} args - Arguments to filter UploadTables to count.
     * @example
     * // Count the number of UploadTables
     * const count = await prisma.uploadTable.count({
     *   where: {
     *     // ... the filter for the UploadTables we want to count
     *   }
     * })
    **/
    count<T extends UploadTableCountArgs>(
      args?: Subset<T, UploadTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UploadTableAggregateArgs>(args: Subset<T, UploadTableAggregateArgs>): Prisma.PrismaPromise<GetUploadTableAggregateType<T>>

    /**
     * Group by UploadTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTableGroupByArgs} args - Group by arguments.
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
      T extends UploadTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadTableGroupByArgs['orderBy'] }
        : { orderBy?: UploadTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UploadTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadTable model
   */
  readonly fields: UploadTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatList<T extends UploadTable$chatListArgs<ExtArgs> = {}>(args?: Subset<T, UploadTable$chatListArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roomTable<T extends RoomTableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTableDefaultArgs<ExtArgs>>): Prisma__RoomTableClient<$Result.GetResult<Prisma.$RoomTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadTable model
   */
  interface UploadTableFieldRefs {
    readonly id: FieldRef<"UploadTable", 'String'>
    readonly name: FieldRef<"UploadTable", 'String'>
    readonly title: FieldRef<"UploadTable", 'String'>
    readonly description: FieldRef<"UploadTable", 'String'>
    readonly videoFilesList: FieldRef<"UploadTable", 'String[]'>
    readonly chatListId: FieldRef<"UploadTable", 'String'>
    readonly roomTableId: FieldRef<"UploadTable", 'String'>
    readonly rating: FieldRef<"UploadTable", 'Int'>
    readonly createdAt: FieldRef<"UploadTable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadTable findUnique
   */
  export type UploadTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * Filter, which UploadTable to fetch.
     */
    where: UploadTableWhereUniqueInput
  }

  /**
   * UploadTable findUniqueOrThrow
   */
  export type UploadTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * Filter, which UploadTable to fetch.
     */
    where: UploadTableWhereUniqueInput
  }

  /**
   * UploadTable findFirst
   */
  export type UploadTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * Filter, which UploadTable to fetch.
     */
    where?: UploadTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTables to fetch.
     */
    orderBy?: UploadTableOrderByWithRelationInput | UploadTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadTables.
     */
    cursor?: UploadTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadTables.
     */
    distinct?: UploadTableScalarFieldEnum | UploadTableScalarFieldEnum[]
  }

  /**
   * UploadTable findFirstOrThrow
   */
  export type UploadTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * Filter, which UploadTable to fetch.
     */
    where?: UploadTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTables to fetch.
     */
    orderBy?: UploadTableOrderByWithRelationInput | UploadTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadTables.
     */
    cursor?: UploadTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadTables.
     */
    distinct?: UploadTableScalarFieldEnum | UploadTableScalarFieldEnum[]
  }

  /**
   * UploadTable findMany
   */
  export type UploadTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * Filter, which UploadTables to fetch.
     */
    where?: UploadTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTables to fetch.
     */
    orderBy?: UploadTableOrderByWithRelationInput | UploadTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadTables.
     */
    cursor?: UploadTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTables.
     */
    skip?: number
    distinct?: UploadTableScalarFieldEnum | UploadTableScalarFieldEnum[]
  }

  /**
   * UploadTable create
   */
  export type UploadTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadTable.
     */
    data: XOR<UploadTableCreateInput, UploadTableUncheckedCreateInput>
  }

  /**
   * UploadTable createMany
   */
  export type UploadTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadTables.
     */
    data: UploadTableCreateManyInput | UploadTableCreateManyInput[]
  }

  /**
   * UploadTable update
   */
  export type UploadTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadTable.
     */
    data: XOR<UploadTableUpdateInput, UploadTableUncheckedUpdateInput>
    /**
     * Choose, which UploadTable to update.
     */
    where: UploadTableWhereUniqueInput
  }

  /**
   * UploadTable updateMany
   */
  export type UploadTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadTables.
     */
    data: XOR<UploadTableUpdateManyMutationInput, UploadTableUncheckedUpdateManyInput>
    /**
     * Filter which UploadTables to update
     */
    where?: UploadTableWhereInput
    /**
     * Limit how many UploadTables to update.
     */
    limit?: number
  }

  /**
   * UploadTable upsert
   */
  export type UploadTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadTable to update in case it exists.
     */
    where: UploadTableWhereUniqueInput
    /**
     * In case the UploadTable found by the `where` argument doesn't exist, create a new UploadTable with this data.
     */
    create: XOR<UploadTableCreateInput, UploadTableUncheckedCreateInput>
    /**
     * In case the UploadTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadTableUpdateInput, UploadTableUncheckedUpdateInput>
  }

  /**
   * UploadTable delete
   */
  export type UploadTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    /**
     * Filter which UploadTable to delete.
     */
    where: UploadTableWhereUniqueInput
  }

  /**
   * UploadTable deleteMany
   */
  export type UploadTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadTables to delete
     */
    where?: UploadTableWhereInput
    /**
     * Limit how many UploadTables to delete.
     */
    limit?: number
  }

  /**
   * UploadTable findRaw
   */
  export type UploadTableFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UploadTable aggregateRaw
   */
  export type UploadTableAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UploadTable.chatList
   */
  export type UploadTable$chatListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    where?: ChatListWhereInput
  }

  /**
   * UploadTable without action
   */
  export type UploadTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
  }


  /**
   * Model ChatList
   */

  export type AggregateChatList = {
    _count: ChatListCountAggregateOutputType | null
    _min: ChatListMinAggregateOutputType | null
    _max: ChatListMaxAggregateOutputType | null
  }

  export type ChatListMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type ChatListMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type ChatListCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type ChatListMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type ChatListMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type ChatListCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type ChatListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatList to aggregate.
     */
    where?: ChatListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatLists to fetch.
     */
    orderBy?: ChatListOrderByWithRelationInput | ChatListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatLists
    **/
    _count?: true | ChatListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatListMaxAggregateInputType
  }

  export type GetChatListAggregateType<T extends ChatListAggregateArgs> = {
        [P in keyof T & keyof AggregateChatList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatList[P]>
      : GetScalarType<T[P], AggregateChatList[P]>
  }




  export type ChatListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatListWhereInput
    orderBy?: ChatListOrderByWithAggregationInput | ChatListOrderByWithAggregationInput[]
    by: ChatListScalarFieldEnum[] | ChatListScalarFieldEnum
    having?: ChatListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatListCountAggregateInputType | true
    _min?: ChatListMinAggregateInputType
    _max?: ChatListMaxAggregateInputType
  }

  export type ChatListGroupByOutputType = {
    id: string
    createdAt: Date
    _count: ChatListCountAggregateOutputType | null
    _min: ChatListMinAggregateOutputType | null
    _max: ChatListMaxAggregateOutputType | null
  }

  type GetChatListGroupByPayload<T extends ChatListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatListGroupByOutputType[P]>
            : GetScalarType<T[P], ChatListGroupByOutputType[P]>
        }
      >
    >


  export type ChatListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    messages?: boolean | ChatList$messagesArgs<ExtArgs>
    uploadTable?: boolean | ChatList$uploadTableArgs<ExtArgs>
    _count?: boolean | ChatListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatList"]>



  export type ChatListSelectScalar = {
    id?: boolean
    createdAt?: boolean
  }

  export type ChatListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt", ExtArgs["result"]["chatList"]>
  export type ChatListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatList$messagesArgs<ExtArgs>
    uploadTable?: boolean | ChatList$uploadTableArgs<ExtArgs>
    _count?: boolean | ChatListCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatList"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      uploadTable: Prisma.$UploadTablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
    }, ExtArgs["result"]["chatList"]>
    composites: {}
  }

  type ChatListGetPayload<S extends boolean | null | undefined | ChatListDefaultArgs> = $Result.GetResult<Prisma.$ChatListPayload, S>

  type ChatListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatListCountAggregateInputType | true
    }

  export interface ChatListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatList'], meta: { name: 'ChatList' } }
    /**
     * Find zero or one ChatList that matches the filter.
     * @param {ChatListFindUniqueArgs} args - Arguments to find a ChatList
     * @example
     * // Get one ChatList
     * const chatList = await prisma.chatList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatListFindUniqueArgs>(args: SelectSubset<T, ChatListFindUniqueArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatListFindUniqueOrThrowArgs} args - Arguments to find a ChatList
     * @example
     * // Get one ChatList
     * const chatList = await prisma.chatList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatListFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListFindFirstArgs} args - Arguments to find a ChatList
     * @example
     * // Get one ChatList
     * const chatList = await prisma.chatList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatListFindFirstArgs>(args?: SelectSubset<T, ChatListFindFirstArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListFindFirstOrThrowArgs} args - Arguments to find a ChatList
     * @example
     * // Get one ChatList
     * const chatList = await prisma.chatList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatListFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatLists
     * const chatLists = await prisma.chatList.findMany()
     * 
     * // Get first 10 ChatLists
     * const chatLists = await prisma.chatList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatListWithIdOnly = await prisma.chatList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatListFindManyArgs>(args?: SelectSubset<T, ChatListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatList.
     * @param {ChatListCreateArgs} args - Arguments to create a ChatList.
     * @example
     * // Create one ChatList
     * const ChatList = await prisma.chatList.create({
     *   data: {
     *     // ... data to create a ChatList
     *   }
     * })
     * 
     */
    create<T extends ChatListCreateArgs>(args: SelectSubset<T, ChatListCreateArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatLists.
     * @param {ChatListCreateManyArgs} args - Arguments to create many ChatLists.
     * @example
     * // Create many ChatLists
     * const chatList = await prisma.chatList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatListCreateManyArgs>(args?: SelectSubset<T, ChatListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatList.
     * @param {ChatListDeleteArgs} args - Arguments to delete one ChatList.
     * @example
     * // Delete one ChatList
     * const ChatList = await prisma.chatList.delete({
     *   where: {
     *     // ... filter to delete one ChatList
     *   }
     * })
     * 
     */
    delete<T extends ChatListDeleteArgs>(args: SelectSubset<T, ChatListDeleteArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatList.
     * @param {ChatListUpdateArgs} args - Arguments to update one ChatList.
     * @example
     * // Update one ChatList
     * const chatList = await prisma.chatList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatListUpdateArgs>(args: SelectSubset<T, ChatListUpdateArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatLists.
     * @param {ChatListDeleteManyArgs} args - Arguments to filter ChatLists to delete.
     * @example
     * // Delete a few ChatLists
     * const { count } = await prisma.chatList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatListDeleteManyArgs>(args?: SelectSubset<T, ChatListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatLists
     * const chatList = await prisma.chatList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatListUpdateManyArgs>(args: SelectSubset<T, ChatListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatList.
     * @param {ChatListUpsertArgs} args - Arguments to update or create a ChatList.
     * @example
     * // Update or create a ChatList
     * const chatList = await prisma.chatList.upsert({
     *   create: {
     *     // ... data to create a ChatList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatList we want to update
     *   }
     * })
     */
    upsert<T extends ChatListUpsertArgs>(args: SelectSubset<T, ChatListUpsertArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatLists that matches the filter.
     * @param {ChatListFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatList = await prisma.chatList.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChatListFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatList.
     * @param {ChatListAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatList = await prisma.chatList.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChatListAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ChatLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListCountArgs} args - Arguments to filter ChatLists to count.
     * @example
     * // Count the number of ChatLists
     * const count = await prisma.chatList.count({
     *   where: {
     *     // ... the filter for the ChatLists we want to count
     *   }
     * })
    **/
    count<T extends ChatListCountArgs>(
      args?: Subset<T, ChatListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatListAggregateArgs>(args: Subset<T, ChatListAggregateArgs>): Prisma.PrismaPromise<GetChatListAggregateType<T>>

    /**
     * Group by ChatList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatListGroupByArgs} args - Group by arguments.
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
      T extends ChatListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatListGroupByArgs['orderBy'] }
        : { orderBy?: ChatListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChatListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatList model
   */
  readonly fields: ChatListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ChatList$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatList$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadTable<T extends ChatList$uploadTableArgs<ExtArgs> = {}>(args?: Subset<T, ChatList$uploadTableArgs<ExtArgs>>): Prisma__UploadTableClient<$Result.GetResult<Prisma.$UploadTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatList model
   */
  interface ChatListFieldRefs {
    readonly id: FieldRef<"ChatList", 'String'>
    readonly createdAt: FieldRef<"ChatList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatList findUnique
   */
  export type ChatListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * Filter, which ChatList to fetch.
     */
    where: ChatListWhereUniqueInput
  }

  /**
   * ChatList findUniqueOrThrow
   */
  export type ChatListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * Filter, which ChatList to fetch.
     */
    where: ChatListWhereUniqueInput
  }

  /**
   * ChatList findFirst
   */
  export type ChatListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * Filter, which ChatList to fetch.
     */
    where?: ChatListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatLists to fetch.
     */
    orderBy?: ChatListOrderByWithRelationInput | ChatListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatLists.
     */
    cursor?: ChatListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatLists.
     */
    distinct?: ChatListScalarFieldEnum | ChatListScalarFieldEnum[]
  }

  /**
   * ChatList findFirstOrThrow
   */
  export type ChatListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * Filter, which ChatList to fetch.
     */
    where?: ChatListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatLists to fetch.
     */
    orderBy?: ChatListOrderByWithRelationInput | ChatListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatLists.
     */
    cursor?: ChatListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatLists.
     */
    distinct?: ChatListScalarFieldEnum | ChatListScalarFieldEnum[]
  }

  /**
   * ChatList findMany
   */
  export type ChatListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * Filter, which ChatLists to fetch.
     */
    where?: ChatListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatLists to fetch.
     */
    orderBy?: ChatListOrderByWithRelationInput | ChatListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatLists.
     */
    cursor?: ChatListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatLists.
     */
    skip?: number
    distinct?: ChatListScalarFieldEnum | ChatListScalarFieldEnum[]
  }

  /**
   * ChatList create
   */
  export type ChatListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatList.
     */
    data?: XOR<ChatListCreateInput, ChatListUncheckedCreateInput>
  }

  /**
   * ChatList createMany
   */
  export type ChatListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatLists.
     */
    data: ChatListCreateManyInput | ChatListCreateManyInput[]
  }

  /**
   * ChatList update
   */
  export type ChatListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatList.
     */
    data: XOR<ChatListUpdateInput, ChatListUncheckedUpdateInput>
    /**
     * Choose, which ChatList to update.
     */
    where: ChatListWhereUniqueInput
  }

  /**
   * ChatList updateMany
   */
  export type ChatListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatLists.
     */
    data: XOR<ChatListUpdateManyMutationInput, ChatListUncheckedUpdateManyInput>
    /**
     * Filter which ChatLists to update
     */
    where?: ChatListWhereInput
    /**
     * Limit how many ChatLists to update.
     */
    limit?: number
  }

  /**
   * ChatList upsert
   */
  export type ChatListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatList to update in case it exists.
     */
    where: ChatListWhereUniqueInput
    /**
     * In case the ChatList found by the `where` argument doesn't exist, create a new ChatList with this data.
     */
    create: XOR<ChatListCreateInput, ChatListUncheckedCreateInput>
    /**
     * In case the ChatList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatListUpdateInput, ChatListUncheckedUpdateInput>
  }

  /**
   * ChatList delete
   */
  export type ChatListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    /**
     * Filter which ChatList to delete.
     */
    where: ChatListWhereUniqueInput
  }

  /**
   * ChatList deleteMany
   */
  export type ChatListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatLists to delete
     */
    where?: ChatListWhereInput
    /**
     * Limit how many ChatLists to delete.
     */
    limit?: number
  }

  /**
   * ChatList findRaw
   */
  export type ChatListFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ChatList aggregateRaw
   */
  export type ChatListAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ChatList.messages
   */
  export type ChatList$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatList.uploadTable
   */
  export type ChatList$uploadTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTable
     */
    select?: UploadTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTable
     */
    omit?: UploadTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadTableInclude<ExtArgs> | null
    where?: UploadTableWhereInput
  }

  /**
   * ChatList without action
   */
  export type ChatListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    messageAt: Date | null
    messageById: string | null
    chatListId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    messageAt: Date | null
    messageById: string | null
    chatListId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message: number
    messageAt: number
    messageById: number
    chatListId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    message?: true
    messageAt?: true
    messageById?: true
    chatListId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message?: true
    messageAt?: true
    messageById?: true
    chatListId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message?: true
    messageAt?: true
    messageById?: true
    chatListId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    message: string
    messageAt: Date
    messageById: string
    chatListId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    messageAt?: boolean
    messageById?: boolean
    chatListId?: boolean
    messageBy?: boolean | UserDefaultArgs<ExtArgs>
    chatList?: boolean | Message$chatListArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    message?: boolean
    messageAt?: boolean
    messageById?: boolean
    chatListId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "messageAt" | "messageById" | "chatListId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messageBy?: boolean | UserDefaultArgs<ExtArgs>
    chatList?: boolean | Message$chatListArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      messageBy: Prisma.$UserPayload<ExtArgs>
      chatList: Prisma.$ChatListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      messageAt: Date
      messageById: string
      chatListId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messageBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatList<T extends Message$chatListArgs<ExtArgs> = {}>(args?: Subset<T, Message$chatListArgs<ExtArgs>>): Prisma__ChatListClient<$Result.GetResult<Prisma.$ChatListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly messageAt: FieldRef<"Message", 'DateTime'>
    readonly messageById: FieldRef<"Message", 'String'>
    readonly chatListId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message.chatList
   */
  export type Message$chatListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatList
     */
    select?: ChatListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatList
     */
    omit?: ChatListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatListInclude<ExtArgs> | null
    where?: ChatListWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomTableScalarFieldEnum: {
    id: 'id',
    category: 'category',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type RoomTableScalarFieldEnum = (typeof RoomTableScalarFieldEnum)[keyof typeof RoomTableScalarFieldEnum]


  export const UploadTableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    description: 'description',
    videoFilesList: 'videoFilesList',
    chatListId: 'chatListId',
    roomTableId: 'roomTableId',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type UploadTableScalarFieldEnum = (typeof UploadTableScalarFieldEnum)[keyof typeof UploadTableScalarFieldEnum]


  export const ChatListScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type ChatListScalarFieldEnum = (typeof ChatListScalarFieldEnum)[keyof typeof ChatListScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    messageAt: 'messageAt',
    messageById: 'messageById',
    chatListId: 'chatListId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    photoUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    roomTables?: RoomTableListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    roomTables?: RoomTableOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    photoUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    roomTables?: RoomTableListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoomTableWhereInput = {
    AND?: RoomTableWhereInput | RoomTableWhereInput[]
    OR?: RoomTableWhereInput[]
    NOT?: RoomTableWhereInput | RoomTableWhereInput[]
    id?: StringFilter<"RoomTable"> | string
    category?: StringFilter<"RoomTable"> | string
    createdById?: StringFilter<"RoomTable"> | string
    createdAt?: DateTimeFilter<"RoomTable"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    uploadTables?: UploadTableListRelationFilter
  }

  export type RoomTableOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    uploadTables?: UploadTableOrderByRelationAggregateInput
  }

  export type RoomTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomTableWhereInput | RoomTableWhereInput[]
    OR?: RoomTableWhereInput[]
    NOT?: RoomTableWhereInput | RoomTableWhereInput[]
    category?: StringFilter<"RoomTable"> | string
    createdById?: StringFilter<"RoomTable"> | string
    createdAt?: DateTimeFilter<"RoomTable"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    uploadTables?: UploadTableListRelationFilter
  }, "id">

  export type RoomTableOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: RoomTableCountOrderByAggregateInput
    _max?: RoomTableMaxOrderByAggregateInput
    _min?: RoomTableMinOrderByAggregateInput
  }

  export type RoomTableScalarWhereWithAggregatesInput = {
    AND?: RoomTableScalarWhereWithAggregatesInput | RoomTableScalarWhereWithAggregatesInput[]
    OR?: RoomTableScalarWhereWithAggregatesInput[]
    NOT?: RoomTableScalarWhereWithAggregatesInput | RoomTableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomTable"> | string
    category?: StringWithAggregatesFilter<"RoomTable"> | string
    createdById?: StringWithAggregatesFilter<"RoomTable"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomTable"> | Date | string
  }

  export type UploadTableWhereInput = {
    AND?: UploadTableWhereInput | UploadTableWhereInput[]
    OR?: UploadTableWhereInput[]
    NOT?: UploadTableWhereInput | UploadTableWhereInput[]
    id?: StringFilter<"UploadTable"> | string
    name?: StringFilter<"UploadTable"> | string
    title?: StringFilter<"UploadTable"> | string
    description?: StringFilter<"UploadTable"> | string
    videoFilesList?: StringNullableListFilter<"UploadTable">
    chatListId?: StringNullableFilter<"UploadTable"> | string | null
    roomTableId?: StringFilter<"UploadTable"> | string
    rating?: IntNullableFilter<"UploadTable"> | number | null
    createdAt?: DateTimeFilter<"UploadTable"> | Date | string
    chatList?: XOR<ChatListNullableScalarRelationFilter, ChatListWhereInput> | null
    roomTable?: XOR<RoomTableScalarRelationFilter, RoomTableWhereInput>
  }

  export type UploadTableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoFilesList?: SortOrder
    chatListId?: SortOrder
    roomTableId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    chatList?: ChatListOrderByWithRelationInput
    roomTable?: RoomTableOrderByWithRelationInput
  }

  export type UploadTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatListId?: string
    AND?: UploadTableWhereInput | UploadTableWhereInput[]
    OR?: UploadTableWhereInput[]
    NOT?: UploadTableWhereInput | UploadTableWhereInput[]
    name?: StringFilter<"UploadTable"> | string
    title?: StringFilter<"UploadTable"> | string
    description?: StringFilter<"UploadTable"> | string
    videoFilesList?: StringNullableListFilter<"UploadTable">
    roomTableId?: StringFilter<"UploadTable"> | string
    rating?: IntNullableFilter<"UploadTable"> | number | null
    createdAt?: DateTimeFilter<"UploadTable"> | Date | string
    chatList?: XOR<ChatListNullableScalarRelationFilter, ChatListWhereInput> | null
    roomTable?: XOR<RoomTableScalarRelationFilter, RoomTableWhereInput>
  }, "id" | "chatListId">

  export type UploadTableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoFilesList?: SortOrder
    chatListId?: SortOrder
    roomTableId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: UploadTableCountOrderByAggregateInput
    _avg?: UploadTableAvgOrderByAggregateInput
    _max?: UploadTableMaxOrderByAggregateInput
    _min?: UploadTableMinOrderByAggregateInput
    _sum?: UploadTableSumOrderByAggregateInput
  }

  export type UploadTableScalarWhereWithAggregatesInput = {
    AND?: UploadTableScalarWhereWithAggregatesInput | UploadTableScalarWhereWithAggregatesInput[]
    OR?: UploadTableScalarWhereWithAggregatesInput[]
    NOT?: UploadTableScalarWhereWithAggregatesInput | UploadTableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadTable"> | string
    name?: StringWithAggregatesFilter<"UploadTable"> | string
    title?: StringWithAggregatesFilter<"UploadTable"> | string
    description?: StringWithAggregatesFilter<"UploadTable"> | string
    videoFilesList?: StringNullableListFilter<"UploadTable">
    chatListId?: StringNullableWithAggregatesFilter<"UploadTable"> | string | null
    roomTableId?: StringWithAggregatesFilter<"UploadTable"> | string
    rating?: IntNullableWithAggregatesFilter<"UploadTable"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UploadTable"> | Date | string
  }

  export type ChatListWhereInput = {
    AND?: ChatListWhereInput | ChatListWhereInput[]
    OR?: ChatListWhereInput[]
    NOT?: ChatListWhereInput | ChatListWhereInput[]
    id?: StringFilter<"ChatList"> | string
    createdAt?: DateTimeFilter<"ChatList"> | Date | string
    messages?: MessageListRelationFilter
    uploadTable?: XOR<UploadTableNullableScalarRelationFilter, UploadTableWhereInput> | null
  }

  export type ChatListOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    uploadTable?: UploadTableOrderByWithRelationInput
  }

  export type ChatListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatListWhereInput | ChatListWhereInput[]
    OR?: ChatListWhereInput[]
    NOT?: ChatListWhereInput | ChatListWhereInput[]
    createdAt?: DateTimeFilter<"ChatList"> | Date | string
    messages?: MessageListRelationFilter
    uploadTable?: XOR<UploadTableNullableScalarRelationFilter, UploadTableWhereInput> | null
  }, "id">

  export type ChatListOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: ChatListCountOrderByAggregateInput
    _max?: ChatListMaxOrderByAggregateInput
    _min?: ChatListMinOrderByAggregateInput
  }

  export type ChatListScalarWhereWithAggregatesInput = {
    AND?: ChatListScalarWhereWithAggregatesInput | ChatListScalarWhereWithAggregatesInput[]
    OR?: ChatListScalarWhereWithAggregatesInput[]
    NOT?: ChatListScalarWhereWithAggregatesInput | ChatListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatList"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    messageAt?: DateTimeFilter<"Message"> | Date | string
    messageById?: StringFilter<"Message"> | string
    chatListId?: StringNullableFilter<"Message"> | string | null
    messageBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatList?: XOR<ChatListNullableScalarRelationFilter, ChatListWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    messageAt?: SortOrder
    messageById?: SortOrder
    chatListId?: SortOrder
    messageBy?: UserOrderByWithRelationInput
    chatList?: ChatListOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message?: StringFilter<"Message"> | string
    messageAt?: DateTimeFilter<"Message"> | Date | string
    messageById?: StringFilter<"Message"> | string
    chatListId?: StringNullableFilter<"Message"> | string | null
    messageBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatList?: XOR<ChatListNullableScalarRelationFilter, ChatListWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    messageAt?: SortOrder
    messageById?: SortOrder
    chatListId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    messageAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    messageById?: StringWithAggregatesFilter<"Message"> | string
    chatListId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
    roomTables?: RoomTableCreateNestedManyWithoutCreatedByInput
    messages?: MessageCreateNestedManyWithoutMessageByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
    roomTables?: RoomTableUncheckedCreateNestedManyWithoutCreatedByInput
    messages?: MessageUncheckedCreateNestedManyWithoutMessageByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomTables?: RoomTableUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUpdateManyWithoutMessageByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomTables?: RoomTableUncheckedUpdateManyWithoutCreatedByNestedInput
    messages?: MessageUncheckedUpdateManyWithoutMessageByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTableCreateInput = {
    id?: string
    category: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutRoomTablesInput
    uploadTables?: UploadTableCreateNestedManyWithoutRoomTableInput
  }

  export type RoomTableUncheckedCreateInput = {
    id?: string
    category: string
    createdById: string
    createdAt?: Date | string
    uploadTables?: UploadTableUncheckedCreateNestedManyWithoutRoomTableInput
  }

  export type RoomTableUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutRoomTablesNestedInput
    uploadTables?: UploadTableUpdateManyWithoutRoomTableNestedInput
  }

  export type RoomTableUncheckedUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadTables?: UploadTableUncheckedUpdateManyWithoutRoomTableNestedInput
  }

  export type RoomTableCreateManyInput = {
    id?: string
    category: string
    createdById: string
    createdAt?: Date | string
  }

  export type RoomTableUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTableUncheckedUpdateManyInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTableCreateInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    rating?: number | null
    createdAt?: Date | string
    chatList?: ChatListCreateNestedOneWithoutUploadTableInput
    roomTable: RoomTableCreateNestedOneWithoutUploadTablesInput
  }

  export type UploadTableUncheckedCreateInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    chatListId?: string | null
    roomTableId: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type UploadTableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatList?: ChatListUpdateOneWithoutUploadTableNestedInput
    roomTable?: RoomTableUpdateOneRequiredWithoutUploadTablesNestedInput
  }

  export type UploadTableUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
    roomTableId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTableCreateManyInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    chatListId?: string | null
    roomTableId: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type UploadTableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTableUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
    roomTableId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatListCreateInput = {
    id?: string
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatListInput
    uploadTable?: UploadTableCreateNestedOneWithoutChatListInput
  }

  export type ChatListUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatListInput
    uploadTable?: UploadTableUncheckedCreateNestedOneWithoutChatListInput
  }

  export type ChatListUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatListNestedInput
    uploadTable?: UploadTableUpdateOneWithoutChatListNestedInput
  }

  export type ChatListUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatListNestedInput
    uploadTable?: UploadTableUncheckedUpdateOneWithoutChatListNestedInput
  }

  export type ChatListCreateManyInput = {
    id?: string
    createdAt?: Date | string
  }

  export type ChatListUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatListUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    message: string
    messageAt?: Date | string
    messageBy: UserCreateNestedOneWithoutMessagesInput
    chatList?: ChatListCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    message: string
    messageAt?: Date | string
    messageById: string
    chatListId?: string | null
  }

  export type MessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageBy?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chatList?: ChatListUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageById?: StringFieldUpdateOperationsInput | string
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    message: string
    messageAt?: Date | string
    messageById: string
    chatListId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageById?: StringFieldUpdateOperationsInput | string
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomTableListRelationFilter = {
    every?: RoomTableWhereInput
    some?: RoomTableWhereInput
    none?: RoomTableWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RoomTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UploadTableListRelationFilter = {
    every?: UploadTableWhereInput
    some?: UploadTableWhereInput
    none?: UploadTableWhereInput
  }

  export type UploadTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTableCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomTableMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomTableMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ChatListNullableScalarRelationFilter = {
    is?: ChatListWhereInput | null
    isNot?: ChatListWhereInput | null
  }

  export type RoomTableScalarRelationFilter = {
    is?: RoomTableWhereInput
    isNot?: RoomTableWhereInput
  }

  export type UploadTableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoFilesList?: SortOrder
    chatListId?: SortOrder
    roomTableId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTableAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UploadTableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chatListId?: SortOrder
    roomTableId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chatListId?: SortOrder
    roomTableId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTableSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UploadTableNullableScalarRelationFilter = {
    is?: UploadTableWhereInput | null
    isNot?: UploadTableWhereInput | null
  }

  export type ChatListCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatListMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatListMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    messageAt?: SortOrder
    messageById?: SortOrder
    chatListId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    messageAt?: SortOrder
    messageById?: SortOrder
    chatListId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    messageAt?: SortOrder
    messageById?: SortOrder
    chatListId?: SortOrder
  }

  export type RoomTableCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RoomTableCreateWithoutCreatedByInput, RoomTableUncheckedCreateWithoutCreatedByInput> | RoomTableCreateWithoutCreatedByInput[] | RoomTableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomTableCreateOrConnectWithoutCreatedByInput | RoomTableCreateOrConnectWithoutCreatedByInput[]
    createMany?: RoomTableCreateManyCreatedByInputEnvelope
    connect?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutMessageByInput = {
    create?: XOR<MessageCreateWithoutMessageByInput, MessageUncheckedCreateWithoutMessageByInput> | MessageCreateWithoutMessageByInput[] | MessageUncheckedCreateWithoutMessageByInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMessageByInput | MessageCreateOrConnectWithoutMessageByInput[]
    createMany?: MessageCreateManyMessageByInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RoomTableUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RoomTableCreateWithoutCreatedByInput, RoomTableUncheckedCreateWithoutCreatedByInput> | RoomTableCreateWithoutCreatedByInput[] | RoomTableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomTableCreateOrConnectWithoutCreatedByInput | RoomTableCreateOrConnectWithoutCreatedByInput[]
    createMany?: RoomTableCreateManyCreatedByInputEnvelope
    connect?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutMessageByInput = {
    create?: XOR<MessageCreateWithoutMessageByInput, MessageUncheckedCreateWithoutMessageByInput> | MessageCreateWithoutMessageByInput[] | MessageUncheckedCreateWithoutMessageByInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMessageByInput | MessageCreateOrConnectWithoutMessageByInput[]
    createMany?: MessageCreateManyMessageByInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomTableUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RoomTableCreateWithoutCreatedByInput, RoomTableUncheckedCreateWithoutCreatedByInput> | RoomTableCreateWithoutCreatedByInput[] | RoomTableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomTableCreateOrConnectWithoutCreatedByInput | RoomTableCreateOrConnectWithoutCreatedByInput[]
    upsert?: RoomTableUpsertWithWhereUniqueWithoutCreatedByInput | RoomTableUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RoomTableCreateManyCreatedByInputEnvelope
    set?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    disconnect?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    delete?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    connect?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    update?: RoomTableUpdateWithWhereUniqueWithoutCreatedByInput | RoomTableUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RoomTableUpdateManyWithWhereWithoutCreatedByInput | RoomTableUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RoomTableScalarWhereInput | RoomTableScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutMessageByNestedInput = {
    create?: XOR<MessageCreateWithoutMessageByInput, MessageUncheckedCreateWithoutMessageByInput> | MessageCreateWithoutMessageByInput[] | MessageUncheckedCreateWithoutMessageByInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMessageByInput | MessageCreateOrConnectWithoutMessageByInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMessageByInput | MessageUpsertWithWhereUniqueWithoutMessageByInput[]
    createMany?: MessageCreateManyMessageByInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMessageByInput | MessageUpdateWithWhereUniqueWithoutMessageByInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMessageByInput | MessageUpdateManyWithWhereWithoutMessageByInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RoomTableUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RoomTableCreateWithoutCreatedByInput, RoomTableUncheckedCreateWithoutCreatedByInput> | RoomTableCreateWithoutCreatedByInput[] | RoomTableUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomTableCreateOrConnectWithoutCreatedByInput | RoomTableCreateOrConnectWithoutCreatedByInput[]
    upsert?: RoomTableUpsertWithWhereUniqueWithoutCreatedByInput | RoomTableUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RoomTableCreateManyCreatedByInputEnvelope
    set?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    disconnect?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    delete?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    connect?: RoomTableWhereUniqueInput | RoomTableWhereUniqueInput[]
    update?: RoomTableUpdateWithWhereUniqueWithoutCreatedByInput | RoomTableUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RoomTableUpdateManyWithWhereWithoutCreatedByInput | RoomTableUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RoomTableScalarWhereInput | RoomTableScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutMessageByNestedInput = {
    create?: XOR<MessageCreateWithoutMessageByInput, MessageUncheckedCreateWithoutMessageByInput> | MessageCreateWithoutMessageByInput[] | MessageUncheckedCreateWithoutMessageByInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMessageByInput | MessageCreateOrConnectWithoutMessageByInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMessageByInput | MessageUpsertWithWhereUniqueWithoutMessageByInput[]
    createMany?: MessageCreateManyMessageByInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMessageByInput | MessageUpdateWithWhereUniqueWithoutMessageByInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMessageByInput | MessageUpdateManyWithWhereWithoutMessageByInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomTablesInput = {
    create?: XOR<UserCreateWithoutRoomTablesInput, UserUncheckedCreateWithoutRoomTablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomTablesInput
    connect?: UserWhereUniqueInput
  }

  export type UploadTableCreateNestedManyWithoutRoomTableInput = {
    create?: XOR<UploadTableCreateWithoutRoomTableInput, UploadTableUncheckedCreateWithoutRoomTableInput> | UploadTableCreateWithoutRoomTableInput[] | UploadTableUncheckedCreateWithoutRoomTableInput[]
    connectOrCreate?: UploadTableCreateOrConnectWithoutRoomTableInput | UploadTableCreateOrConnectWithoutRoomTableInput[]
    createMany?: UploadTableCreateManyRoomTableInputEnvelope
    connect?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
  }

  export type UploadTableUncheckedCreateNestedManyWithoutRoomTableInput = {
    create?: XOR<UploadTableCreateWithoutRoomTableInput, UploadTableUncheckedCreateWithoutRoomTableInput> | UploadTableCreateWithoutRoomTableInput[] | UploadTableUncheckedCreateWithoutRoomTableInput[]
    connectOrCreate?: UploadTableCreateOrConnectWithoutRoomTableInput | UploadTableCreateOrConnectWithoutRoomTableInput[]
    createMany?: UploadTableCreateManyRoomTableInputEnvelope
    connect?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoomTablesNestedInput = {
    create?: XOR<UserCreateWithoutRoomTablesInput, UserUncheckedCreateWithoutRoomTablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomTablesInput
    upsert?: UserUpsertWithoutRoomTablesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomTablesInput, UserUpdateWithoutRoomTablesInput>, UserUncheckedUpdateWithoutRoomTablesInput>
  }

  export type UploadTableUpdateManyWithoutRoomTableNestedInput = {
    create?: XOR<UploadTableCreateWithoutRoomTableInput, UploadTableUncheckedCreateWithoutRoomTableInput> | UploadTableCreateWithoutRoomTableInput[] | UploadTableUncheckedCreateWithoutRoomTableInput[]
    connectOrCreate?: UploadTableCreateOrConnectWithoutRoomTableInput | UploadTableCreateOrConnectWithoutRoomTableInput[]
    upsert?: UploadTableUpsertWithWhereUniqueWithoutRoomTableInput | UploadTableUpsertWithWhereUniqueWithoutRoomTableInput[]
    createMany?: UploadTableCreateManyRoomTableInputEnvelope
    set?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    disconnect?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    delete?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    connect?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    update?: UploadTableUpdateWithWhereUniqueWithoutRoomTableInput | UploadTableUpdateWithWhereUniqueWithoutRoomTableInput[]
    updateMany?: UploadTableUpdateManyWithWhereWithoutRoomTableInput | UploadTableUpdateManyWithWhereWithoutRoomTableInput[]
    deleteMany?: UploadTableScalarWhereInput | UploadTableScalarWhereInput[]
  }

  export type UploadTableUncheckedUpdateManyWithoutRoomTableNestedInput = {
    create?: XOR<UploadTableCreateWithoutRoomTableInput, UploadTableUncheckedCreateWithoutRoomTableInput> | UploadTableCreateWithoutRoomTableInput[] | UploadTableUncheckedCreateWithoutRoomTableInput[]
    connectOrCreate?: UploadTableCreateOrConnectWithoutRoomTableInput | UploadTableCreateOrConnectWithoutRoomTableInput[]
    upsert?: UploadTableUpsertWithWhereUniqueWithoutRoomTableInput | UploadTableUpsertWithWhereUniqueWithoutRoomTableInput[]
    createMany?: UploadTableCreateManyRoomTableInputEnvelope
    set?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    disconnect?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    delete?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    connect?: UploadTableWhereUniqueInput | UploadTableWhereUniqueInput[]
    update?: UploadTableUpdateWithWhereUniqueWithoutRoomTableInput | UploadTableUpdateWithWhereUniqueWithoutRoomTableInput[]
    updateMany?: UploadTableUpdateManyWithWhereWithoutRoomTableInput | UploadTableUpdateManyWithWhereWithoutRoomTableInput[]
    deleteMany?: UploadTableScalarWhereInput | UploadTableScalarWhereInput[]
  }

  export type UploadTableCreatevideoFilesListInput = {
    set: string[]
  }

  export type ChatListCreateNestedOneWithoutUploadTableInput = {
    create?: XOR<ChatListCreateWithoutUploadTableInput, ChatListUncheckedCreateWithoutUploadTableInput>
    connectOrCreate?: ChatListCreateOrConnectWithoutUploadTableInput
    connect?: ChatListWhereUniqueInput
  }

  export type RoomTableCreateNestedOneWithoutUploadTablesInput = {
    create?: XOR<RoomTableCreateWithoutUploadTablesInput, RoomTableUncheckedCreateWithoutUploadTablesInput>
    connectOrCreate?: RoomTableCreateOrConnectWithoutUploadTablesInput
    connect?: RoomTableWhereUniqueInput
  }

  export type UploadTableUpdatevideoFilesListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ChatListUpdateOneWithoutUploadTableNestedInput = {
    create?: XOR<ChatListCreateWithoutUploadTableInput, ChatListUncheckedCreateWithoutUploadTableInput>
    connectOrCreate?: ChatListCreateOrConnectWithoutUploadTableInput
    upsert?: ChatListUpsertWithoutUploadTableInput
    disconnect?: boolean
    delete?: ChatListWhereInput | boolean
    connect?: ChatListWhereUniqueInput
    update?: XOR<XOR<ChatListUpdateToOneWithWhereWithoutUploadTableInput, ChatListUpdateWithoutUploadTableInput>, ChatListUncheckedUpdateWithoutUploadTableInput>
  }

  export type RoomTableUpdateOneRequiredWithoutUploadTablesNestedInput = {
    create?: XOR<RoomTableCreateWithoutUploadTablesInput, RoomTableUncheckedCreateWithoutUploadTablesInput>
    connectOrCreate?: RoomTableCreateOrConnectWithoutUploadTablesInput
    upsert?: RoomTableUpsertWithoutUploadTablesInput
    connect?: RoomTableWhereUniqueInput
    update?: XOR<XOR<RoomTableUpdateToOneWithWhereWithoutUploadTablesInput, RoomTableUpdateWithoutUploadTablesInput>, RoomTableUncheckedUpdateWithoutUploadTablesInput>
  }

  export type MessageCreateNestedManyWithoutChatListInput = {
    create?: XOR<MessageCreateWithoutChatListInput, MessageUncheckedCreateWithoutChatListInput> | MessageCreateWithoutChatListInput[] | MessageUncheckedCreateWithoutChatListInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatListInput | MessageCreateOrConnectWithoutChatListInput[]
    createMany?: MessageCreateManyChatListInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UploadTableCreateNestedOneWithoutChatListInput = {
    create?: XOR<UploadTableCreateWithoutChatListInput, UploadTableUncheckedCreateWithoutChatListInput>
    connectOrCreate?: UploadTableCreateOrConnectWithoutChatListInput
    connect?: UploadTableWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutChatListInput = {
    create?: XOR<MessageCreateWithoutChatListInput, MessageUncheckedCreateWithoutChatListInput> | MessageCreateWithoutChatListInput[] | MessageUncheckedCreateWithoutChatListInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatListInput | MessageCreateOrConnectWithoutChatListInput[]
    createMany?: MessageCreateManyChatListInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UploadTableUncheckedCreateNestedOneWithoutChatListInput = {
    create?: XOR<UploadTableCreateWithoutChatListInput, UploadTableUncheckedCreateWithoutChatListInput>
    connectOrCreate?: UploadTableCreateOrConnectWithoutChatListInput
    connect?: UploadTableWhereUniqueInput
  }

  export type MessageUpdateManyWithoutChatListNestedInput = {
    create?: XOR<MessageCreateWithoutChatListInput, MessageUncheckedCreateWithoutChatListInput> | MessageCreateWithoutChatListInput[] | MessageUncheckedCreateWithoutChatListInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatListInput | MessageCreateOrConnectWithoutChatListInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatListInput | MessageUpsertWithWhereUniqueWithoutChatListInput[]
    createMany?: MessageCreateManyChatListInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatListInput | MessageUpdateWithWhereUniqueWithoutChatListInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatListInput | MessageUpdateManyWithWhereWithoutChatListInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UploadTableUpdateOneWithoutChatListNestedInput = {
    create?: XOR<UploadTableCreateWithoutChatListInput, UploadTableUncheckedCreateWithoutChatListInput>
    connectOrCreate?: UploadTableCreateOrConnectWithoutChatListInput
    upsert?: UploadTableUpsertWithoutChatListInput
    disconnect?: UploadTableWhereInput | boolean
    delete?: UploadTableWhereInput | boolean
    connect?: UploadTableWhereUniqueInput
    update?: XOR<XOR<UploadTableUpdateToOneWithWhereWithoutChatListInput, UploadTableUpdateWithoutChatListInput>, UploadTableUncheckedUpdateWithoutChatListInput>
  }

  export type MessageUncheckedUpdateManyWithoutChatListNestedInput = {
    create?: XOR<MessageCreateWithoutChatListInput, MessageUncheckedCreateWithoutChatListInput> | MessageCreateWithoutChatListInput[] | MessageUncheckedCreateWithoutChatListInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatListInput | MessageCreateOrConnectWithoutChatListInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatListInput | MessageUpsertWithWhereUniqueWithoutChatListInput[]
    createMany?: MessageCreateManyChatListInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatListInput | MessageUpdateWithWhereUniqueWithoutChatListInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatListInput | MessageUpdateManyWithWhereWithoutChatListInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UploadTableUncheckedUpdateOneWithoutChatListNestedInput = {
    create?: XOR<UploadTableCreateWithoutChatListInput, UploadTableUncheckedCreateWithoutChatListInput>
    connectOrCreate?: UploadTableCreateOrConnectWithoutChatListInput
    upsert?: UploadTableUpsertWithoutChatListInput
    disconnect?: UploadTableWhereInput | boolean
    delete?: UploadTableWhereInput | boolean
    connect?: UploadTableWhereUniqueInput
    update?: XOR<XOR<UploadTableUpdateToOneWithWhereWithoutChatListInput, UploadTableUpdateWithoutChatListInput>, UploadTableUncheckedUpdateWithoutChatListInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatListCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatListCreateWithoutMessagesInput, ChatListUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatListCreateOrConnectWithoutMessagesInput
    connect?: ChatListWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatListUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ChatListCreateWithoutMessagesInput, ChatListUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatListCreateOrConnectWithoutMessagesInput
    upsert?: ChatListUpsertWithoutMessagesInput
    disconnect?: boolean
    delete?: ChatListWhereInput | boolean
    connect?: ChatListWhereUniqueInput
    update?: XOR<XOR<ChatListUpdateToOneWithWhereWithoutMessagesInput, ChatListUpdateWithoutMessagesInput>, ChatListUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type RoomTableCreateWithoutCreatedByInput = {
    id?: string
    category: string
    createdAt?: Date | string
    uploadTables?: UploadTableCreateNestedManyWithoutRoomTableInput
  }

  export type RoomTableUncheckedCreateWithoutCreatedByInput = {
    id?: string
    category: string
    createdAt?: Date | string
    uploadTables?: UploadTableUncheckedCreateNestedManyWithoutRoomTableInput
  }

  export type RoomTableCreateOrConnectWithoutCreatedByInput = {
    where: RoomTableWhereUniqueInput
    create: XOR<RoomTableCreateWithoutCreatedByInput, RoomTableUncheckedCreateWithoutCreatedByInput>
  }

  export type RoomTableCreateManyCreatedByInputEnvelope = {
    data: RoomTableCreateManyCreatedByInput | RoomTableCreateManyCreatedByInput[]
  }

  export type MessageCreateWithoutMessageByInput = {
    id?: string
    message: string
    messageAt?: Date | string
    chatList?: ChatListCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutMessageByInput = {
    id?: string
    message: string
    messageAt?: Date | string
    chatListId?: string | null
  }

  export type MessageCreateOrConnectWithoutMessageByInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMessageByInput, MessageUncheckedCreateWithoutMessageByInput>
  }

  export type MessageCreateManyMessageByInputEnvelope = {
    data: MessageCreateManyMessageByInput | MessageCreateManyMessageByInput[]
  }

  export type RoomTableUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RoomTableWhereUniqueInput
    update: XOR<RoomTableUpdateWithoutCreatedByInput, RoomTableUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RoomTableCreateWithoutCreatedByInput, RoomTableUncheckedCreateWithoutCreatedByInput>
  }

  export type RoomTableUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RoomTableWhereUniqueInput
    data: XOR<RoomTableUpdateWithoutCreatedByInput, RoomTableUncheckedUpdateWithoutCreatedByInput>
  }

  export type RoomTableUpdateManyWithWhereWithoutCreatedByInput = {
    where: RoomTableScalarWhereInput
    data: XOR<RoomTableUpdateManyMutationInput, RoomTableUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RoomTableScalarWhereInput = {
    AND?: RoomTableScalarWhereInput | RoomTableScalarWhereInput[]
    OR?: RoomTableScalarWhereInput[]
    NOT?: RoomTableScalarWhereInput | RoomTableScalarWhereInput[]
    id?: StringFilter<"RoomTable"> | string
    category?: StringFilter<"RoomTable"> | string
    createdById?: StringFilter<"RoomTable"> | string
    createdAt?: DateTimeFilter<"RoomTable"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutMessageByInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutMessageByInput, MessageUncheckedUpdateWithoutMessageByInput>
    create: XOR<MessageCreateWithoutMessageByInput, MessageUncheckedCreateWithoutMessageByInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutMessageByInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutMessageByInput, MessageUncheckedUpdateWithoutMessageByInput>
  }

  export type MessageUpdateManyWithWhereWithoutMessageByInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessageByInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    messageAt?: DateTimeFilter<"Message"> | Date | string
    messageById?: StringFilter<"Message"> | string
    chatListId?: StringNullableFilter<"Message"> | string | null
  }

  export type UserCreateWithoutRoomTablesInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutMessageByInput
  }

  export type UserUncheckedCreateWithoutRoomTablesInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMessageByInput
  }

  export type UserCreateOrConnectWithoutRoomTablesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomTablesInput, UserUncheckedCreateWithoutRoomTablesInput>
  }

  export type UploadTableCreateWithoutRoomTableInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    rating?: number | null
    createdAt?: Date | string
    chatList?: ChatListCreateNestedOneWithoutUploadTableInput
  }

  export type UploadTableUncheckedCreateWithoutRoomTableInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    chatListId?: string | null
    rating?: number | null
    createdAt?: Date | string
  }

  export type UploadTableCreateOrConnectWithoutRoomTableInput = {
    where: UploadTableWhereUniqueInput
    create: XOR<UploadTableCreateWithoutRoomTableInput, UploadTableUncheckedCreateWithoutRoomTableInput>
  }

  export type UploadTableCreateManyRoomTableInputEnvelope = {
    data: UploadTableCreateManyRoomTableInput | UploadTableCreateManyRoomTableInput[]
  }

  export type UserUpsertWithoutRoomTablesInput = {
    update: XOR<UserUpdateWithoutRoomTablesInput, UserUncheckedUpdateWithoutRoomTablesInput>
    create: XOR<UserCreateWithoutRoomTablesInput, UserUncheckedCreateWithoutRoomTablesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomTablesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomTablesInput, UserUncheckedUpdateWithoutRoomTablesInput>
  }

  export type UserUpdateWithoutRoomTablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutMessageByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomTablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMessageByNestedInput
  }

  export type UploadTableUpsertWithWhereUniqueWithoutRoomTableInput = {
    where: UploadTableWhereUniqueInput
    update: XOR<UploadTableUpdateWithoutRoomTableInput, UploadTableUncheckedUpdateWithoutRoomTableInput>
    create: XOR<UploadTableCreateWithoutRoomTableInput, UploadTableUncheckedCreateWithoutRoomTableInput>
  }

  export type UploadTableUpdateWithWhereUniqueWithoutRoomTableInput = {
    where: UploadTableWhereUniqueInput
    data: XOR<UploadTableUpdateWithoutRoomTableInput, UploadTableUncheckedUpdateWithoutRoomTableInput>
  }

  export type UploadTableUpdateManyWithWhereWithoutRoomTableInput = {
    where: UploadTableScalarWhereInput
    data: XOR<UploadTableUpdateManyMutationInput, UploadTableUncheckedUpdateManyWithoutRoomTableInput>
  }

  export type UploadTableScalarWhereInput = {
    AND?: UploadTableScalarWhereInput | UploadTableScalarWhereInput[]
    OR?: UploadTableScalarWhereInput[]
    NOT?: UploadTableScalarWhereInput | UploadTableScalarWhereInput[]
    id?: StringFilter<"UploadTable"> | string
    name?: StringFilter<"UploadTable"> | string
    title?: StringFilter<"UploadTable"> | string
    description?: StringFilter<"UploadTable"> | string
    videoFilesList?: StringNullableListFilter<"UploadTable">
    chatListId?: StringNullableFilter<"UploadTable"> | string | null
    roomTableId?: StringFilter<"UploadTable"> | string
    rating?: IntNullableFilter<"UploadTable"> | number | null
    createdAt?: DateTimeFilter<"UploadTable"> | Date | string
  }

  export type ChatListCreateWithoutUploadTableInput = {
    id?: string
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatListInput
  }

  export type ChatListUncheckedCreateWithoutUploadTableInput = {
    id?: string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatListInput
  }

  export type ChatListCreateOrConnectWithoutUploadTableInput = {
    where: ChatListWhereUniqueInput
    create: XOR<ChatListCreateWithoutUploadTableInput, ChatListUncheckedCreateWithoutUploadTableInput>
  }

  export type RoomTableCreateWithoutUploadTablesInput = {
    id?: string
    category: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutRoomTablesInput
  }

  export type RoomTableUncheckedCreateWithoutUploadTablesInput = {
    id?: string
    category: string
    createdById: string
    createdAt?: Date | string
  }

  export type RoomTableCreateOrConnectWithoutUploadTablesInput = {
    where: RoomTableWhereUniqueInput
    create: XOR<RoomTableCreateWithoutUploadTablesInput, RoomTableUncheckedCreateWithoutUploadTablesInput>
  }

  export type ChatListUpsertWithoutUploadTableInput = {
    update: XOR<ChatListUpdateWithoutUploadTableInput, ChatListUncheckedUpdateWithoutUploadTableInput>
    create: XOR<ChatListCreateWithoutUploadTableInput, ChatListUncheckedCreateWithoutUploadTableInput>
    where?: ChatListWhereInput
  }

  export type ChatListUpdateToOneWithWhereWithoutUploadTableInput = {
    where?: ChatListWhereInput
    data: XOR<ChatListUpdateWithoutUploadTableInput, ChatListUncheckedUpdateWithoutUploadTableInput>
  }

  export type ChatListUpdateWithoutUploadTableInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatListNestedInput
  }

  export type ChatListUncheckedUpdateWithoutUploadTableInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatListNestedInput
  }

  export type RoomTableUpsertWithoutUploadTablesInput = {
    update: XOR<RoomTableUpdateWithoutUploadTablesInput, RoomTableUncheckedUpdateWithoutUploadTablesInput>
    create: XOR<RoomTableCreateWithoutUploadTablesInput, RoomTableUncheckedCreateWithoutUploadTablesInput>
    where?: RoomTableWhereInput
  }

  export type RoomTableUpdateToOneWithWhereWithoutUploadTablesInput = {
    where?: RoomTableWhereInput
    data: XOR<RoomTableUpdateWithoutUploadTablesInput, RoomTableUncheckedUpdateWithoutUploadTablesInput>
  }

  export type RoomTableUpdateWithoutUploadTablesInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutRoomTablesNestedInput
  }

  export type RoomTableUncheckedUpdateWithoutUploadTablesInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateWithoutChatListInput = {
    id?: string
    message: string
    messageAt?: Date | string
    messageBy: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatListInput = {
    id?: string
    message: string
    messageAt?: Date | string
    messageById: string
  }

  export type MessageCreateOrConnectWithoutChatListInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatListInput, MessageUncheckedCreateWithoutChatListInput>
  }

  export type MessageCreateManyChatListInputEnvelope = {
    data: MessageCreateManyChatListInput | MessageCreateManyChatListInput[]
  }

  export type UploadTableCreateWithoutChatListInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    rating?: number | null
    createdAt?: Date | string
    roomTable: RoomTableCreateNestedOneWithoutUploadTablesInput
  }

  export type UploadTableUncheckedCreateWithoutChatListInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    roomTableId: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type UploadTableCreateOrConnectWithoutChatListInput = {
    where: UploadTableWhereUniqueInput
    create: XOR<UploadTableCreateWithoutChatListInput, UploadTableUncheckedCreateWithoutChatListInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatListInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatListInput, MessageUncheckedUpdateWithoutChatListInput>
    create: XOR<MessageCreateWithoutChatListInput, MessageUncheckedCreateWithoutChatListInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatListInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatListInput, MessageUncheckedUpdateWithoutChatListInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatListInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatListInput>
  }

  export type UploadTableUpsertWithoutChatListInput = {
    update: XOR<UploadTableUpdateWithoutChatListInput, UploadTableUncheckedUpdateWithoutChatListInput>
    create: XOR<UploadTableCreateWithoutChatListInput, UploadTableUncheckedCreateWithoutChatListInput>
    where?: UploadTableWhereInput
  }

  export type UploadTableUpdateToOneWithWhereWithoutChatListInput = {
    where?: UploadTableWhereInput
    data: XOR<UploadTableUpdateWithoutChatListInput, UploadTableUncheckedUpdateWithoutChatListInput>
  }

  export type UploadTableUpdateWithoutChatListInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomTable?: RoomTableUpdateOneRequiredWithoutUploadTablesNestedInput
  }

  export type UploadTableUncheckedUpdateWithoutChatListInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    roomTableId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
    roomTables?: RoomTableCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    photoUrl?: string | null
    createdAt?: Date | string
    roomTables?: RoomTableUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatListCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    uploadTable?: UploadTableCreateNestedOneWithoutChatListInput
  }

  export type ChatListUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    uploadTable?: UploadTableUncheckedCreateNestedOneWithoutChatListInput
  }

  export type ChatListCreateOrConnectWithoutMessagesInput = {
    where: ChatListWhereUniqueInput
    create: XOR<ChatListCreateWithoutMessagesInput, ChatListUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomTables?: RoomTableUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomTables?: RoomTableUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ChatListUpsertWithoutMessagesInput = {
    update: XOR<ChatListUpdateWithoutMessagesInput, ChatListUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatListCreateWithoutMessagesInput, ChatListUncheckedCreateWithoutMessagesInput>
    where?: ChatListWhereInput
  }

  export type ChatListUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatListWhereInput
    data: XOR<ChatListUpdateWithoutMessagesInput, ChatListUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatListUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadTable?: UploadTableUpdateOneWithoutChatListNestedInput
  }

  export type ChatListUncheckedUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadTable?: UploadTableUncheckedUpdateOneWithoutChatListNestedInput
  }

  export type RoomTableCreateManyCreatedByInput = {
    id?: string
    category: string
    createdAt?: Date | string
  }

  export type MessageCreateManyMessageByInput = {
    id?: string
    message: string
    messageAt?: Date | string
    chatListId?: string | null
  }

  export type RoomTableUpdateWithoutCreatedByInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadTables?: UploadTableUpdateManyWithoutRoomTableNestedInput
  }

  export type RoomTableUncheckedUpdateWithoutCreatedByInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadTables?: UploadTableUncheckedUpdateManyWithoutRoomTableNestedInput
  }

  export type RoomTableUncheckedUpdateManyWithoutCreatedByInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutMessageByInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatList?: ChatListUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutMessageByInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutMessageByInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadTableCreateManyRoomTableInput = {
    id?: string
    name: string
    title: string
    description: string
    videoFilesList?: UploadTableCreatevideoFilesListInput | string[]
    chatListId?: string | null
    rating?: number | null
    createdAt?: Date | string
  }

  export type UploadTableUpdateWithoutRoomTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatList?: ChatListUpdateOneWithoutUploadTableNestedInput
  }

  export type UploadTableUncheckedUpdateWithoutRoomTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTableUncheckedUpdateManyWithoutRoomTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoFilesList?: UploadTableUpdatevideoFilesListInput | string[]
    chatListId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatListInput = {
    id?: string
    message: string
    messageAt?: Date | string
    messageById: string
  }

  export type MessageUpdateWithoutChatListInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageBy?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatListInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageById?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutChatListInput = {
    message?: StringFieldUpdateOperationsInput | string
    messageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageById?: StringFieldUpdateOperationsInput | string
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