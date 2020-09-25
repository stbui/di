/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import { Container } from './container';
import { DependenciesScanner } from './scanner';
import { Injector } from './injector';
/**
 * this is Runner.
 */
export class Runner {
    /**
     * 开始分析模块依赖
     * @param {object} module - this is a module.
     */
    static run(module) {
        this.dependenciesScanner.scan(module);
        this.injector.createInstancesOfDependencies();
    }
}
Runner.container = new Container();
Runner.dependenciesScanner = new DependenciesScanner(Runner.container);
Runner.injector = new Injector(Runner.container);
//# sourceMappingURL=run.js.map