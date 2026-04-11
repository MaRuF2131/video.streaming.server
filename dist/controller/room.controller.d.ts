import { Request, Response } from "express";
export declare const roomController: {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    list(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    remove(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=room.controller.d.ts.map