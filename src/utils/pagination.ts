export interface PaginationOptions {
  page?: number;        // default = 1
  limit?: number;       // default = 10
  orderBy?: object;     // Prisma orderBy object
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Generic pagination helper for Prisma models
 */
export async function paginate<T>(
  modelFindMany: () => Promise<T[]>,    // findMany callback
  modelCount: () => Promise<number>,    // count callback
  options?: PaginationOptions
): Promise<PaginatedResult<T>> {
  const page = options?.page && options.page > 0 ? options.page : 1;
  const limit = options?.limit && options.limit > 0 ? options.limit : 10;

  const [data, total] = await Promise.all([
    modelFindMany(),
    modelCount(),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total,
    page,
    limit,
    totalPages,
  };
}
