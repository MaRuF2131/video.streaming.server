export declare const isRequired: (v: any) => boolean;
export declare const isValidString: (v: any, min?: number, max?: number) => boolean;
export declare const isValidEmail: (v: any) => boolean;
export declare const isValidNumber: (v: any, min?: number, max?: number) => boolean;
export declare const runValidations: (rules: Record<string, [((v: any) => boolean), string][]>, data: Record<string, any>) => Promise<{
    isValid: boolean;
    errors: Record<string, string>;
}>;
//# sourceMappingURL=validation.d.ts.map