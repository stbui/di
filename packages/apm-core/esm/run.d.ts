/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
/**
 * this is Runner.
 */
export declare class Runner {
    private static container;
    private static dependenciesScanner;
    private static injector;
    /**
     * 开始分析模块依赖
     * @param {object} module - this is a module.
     */
    static run(module: any): void;
}
