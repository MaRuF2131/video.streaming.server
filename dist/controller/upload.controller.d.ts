import { Request, Response } from "express";
export declare const uploadController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    list(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=upload.controller.d.ts.map