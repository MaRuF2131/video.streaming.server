export interface DangerousCheckOptions {
    checkXSS?: boolean;
    checkJSCalls?: boolean;
    checkNoSQL?: boolean;
    checkSQL?: boolean;
    maxLength?: number;
    customBlacklist?: (string | RegExp)[];
}
export interface DangerousCheckResult {
    found: boolean;
    reasons: string[];
}
export declare function containsDangerousContent(input: any, options?: DangerousCheckOptions): Promise<DangerousCheckResult>;
//# sourceMappingURL=dangerous.d.ts.map