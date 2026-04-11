"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
/**
 * Generic pagination helper for Prisma models
 */
async function paginate(modelFindMany, // findMany callback
modelCount, // count callback
options) {
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
//# sourceMappingURL=pagination.js.map