/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
export class Container {
    constructor() {
        this.modules = new Map();
    }
    /**
     * 将模块加入到列表中
     * @param module 模块
     */
    addModule(module) {
        if (!this.modules.has(module)) {
            this.modules.set(module, {
                relatedModules: new Set(),
                components: new Map(),
                controllers: new Map(),
            });
        }
    }
    getModules() {
        return this.modules;
    }
    addRelatedModule(relatedModule, module) {
        if (this.modules.has(module)) {
            const storedModule = this.modules.get(module);
            const related = this.modules.get(relatedModule);
            storedModule.relatedModules.add(related);
        }
    }
    addComponent(component, module) {
        if (this.modules.has(module)) {
            const storedModule = this.modules.get(module);
            storedModule.components.set(component, {
                instance: null,
                isResolved: false,
            });
        }
    }
    addController(controller, module) {
        if (this.modules.has(module)) {
            const storedModule = this.modules.get(module);
            storedModule.controllers.set(controller, {
                instance: null,
                isResolved: false,
            });
        }
    }
}
//# sourceMappingURL=container.js.map