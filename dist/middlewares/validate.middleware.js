"use strict";
// src/utils/validate.middleware.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const dangerous_1 = require("../utils/dangerous");
const validation_1 = require("../utils/validation");
const validateRequest = (rules /* Record<string, [((v: any) => any), string][]> */) => {
    return async (req, res, next) => {
        // merge all input sources
        const combinedData = {
            ...req.body,
            ...req.params,
            ...req.query,
        };
        console.log("combinedData", combinedData);
        // dangerous content check
        const danger = await (0, dangerous_1.containsDangerousContent)(combinedData);
        if (danger?.found) {
            return res.status(400).json({
                message: "Dangerous content detected",
                reasons: danger.reasons,
            });
        }
        // field validation (only for body fields)
        const result = await (0, validation_1.runValidations)(rules, combinedData);
        if (!result.isValid) {
            return res.status(422).json(result.errors);
        }
        next();
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validate.middleware.js.map