// src/utils/validation.ts

export const isRequired = (v: any) => v !== undefined && v !== null && v !== "";

export const isValidString = (v: any, min = 1, max = 255) => {
    if (typeof v !== "string") return false;
    const s = v.trim();
    if (s.length < min || s.length > max) return false;
    if (/<.*?>|--|['"`;$]/.test(s)) return false;
    return true;
};

export const isValidEmail = (v: any) =>
    typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const isValidNumber = (v: any, min?: number, max?: number) => {
    const num = Number(v);
    console.log("num",num);
    
    if (isNaN(num)) return false;
    if (min !== undefined && num < min) return false;
    if (max !== undefined && num > max) return false;
    return true;
};

export  const runValidations = async (
    rules: Record<string, [((v: any) => boolean), string][]>,
    data: Record<string, any>
): Promise<{ isValid: boolean; errors: Record<string, string> }> => {
    const errors: Record<string, string> = {};

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
