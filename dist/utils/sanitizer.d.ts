import { Request, Response, NextFunction } from "express";
export declare function isPlainObject(val: any): val is Record<string, any>;
export declare function sanitizeString(str: string, options?: {
    maxLength?: number;
}): string;
/**
 * Sanitize deeply any input object/array/string
 */
export declare function sanitizeObject(input: any, options?: {
    maxStringLength?: number;
    allowedKeysRegex?: RegExp | null;
    removeEmpty?: boolean;
}): any;
/**
 * Middleware: sanitize req.body/query/params
 */
export declare function sanitizeMiddleware(options?: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=sanitizer.d.ts.map