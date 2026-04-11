export interface PaginationOptions {
    page?: number;
    limit?: number;
    orderBy?: object;
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
export declare function paginate<T>(modelFindMany: () => Promise<T[]>, // findMany callback
modelCount: () => Promise<number>, // count callback
options?: PaginationOptions): Promise<PaginatedResult<T>>;
//# sourceMappingURL=pagination.d.ts.map