// src/utils/validate.middleware.ts

import { containsDangerousContent } from "../utils/dangerous";
import { runValidations } from "../utils/validation";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (
    rules:any /* Record<string, [((v: any) => any), string][]> */
) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        // merge all input sources
        const combinedData = {
            ...req.body,
            ...req.params,
            ...req.query,
        };

        // dangerous content check
        const danger = await containsDangerousContent(combinedData);

        if (danger?.found) {
            return res.status(400).json({
                message: "Dangerous content detected",
                reasons: danger.reasons,
            });
        }

        // field validation (only for body fields)
        const result = await runValidations(rules, combinedData);

        if (!result.isValid) {
            return res.status(422).json(result.errors);
        }

        next();
    };
};
