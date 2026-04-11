"use strict";
// src/utils/validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.runValidations = exports.isValidNumber = exports.isValidEmail = exports.isValidString = exports.isRequired = void 0;
const isRequired = (v) => v !== undefined && v !== null && v !== "";
exports.isRequired = isRequired;
const isValidString = (v, min = 1, max = 255) => {
    if (typeof v !== "string")
        return false;
    const s = v.trim();
    if (s.length < min || s.length > max)
        return false;
    if (/<.*?>|--|['"`;$]/.test(s))
        return false;
    return true;
};
exports.isValidString = isValidString;
const isValidEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
exports.isValidEmail = isValidEmail;
const isValidNumber = (v, min, max) => {
    const num = Number(v);
    console.log("num", num);
    if (isNaN(num))
        return false;
    if (min !== undefined && num < min)
        return false;
    if (max !== undefined && num > max)
        return false;
    return true;
};
exports.isValidNumber = isValidNumber;
const runValidations = async (rules, data) => {
    const errors = {};
    for (const [field, validators] of Object.entries(rules)) {
        const value = data[field];
        for (const [check, msg] of validators) {
            if (!check(value)) {
                errors[field] = msg;
                break;
            }
        }
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
exports.runValidations = runValidations;
//# sourceMappingURL=validation.js.map