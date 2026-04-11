import { Request, Response, NextFunction } from "express";
export declare const validateRequest: (rules: any) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=validate.middleware.d.ts.map