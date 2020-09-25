/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
export class DependenciesScanner {
    constructor(container) {
        this.container = container;
    }
    scan(module) {
        this.scanForModules(module);
        this.scanModulesForDependencies();
    }
    scanForModules(module) {
        this.storeModule(module);
        const innerModules = Reflect.getMetadata('modules', module) || [];
        innerModules.map(module => this.scanForModules(module));
    }
    storeModule(module) {
        this.container.addModule(module);
    }
    scanModulesForDependencies() {
        const modules = this.container.getModules();
        modules.forEach((deps, module) => {
            const modules = Reflect.getMetadata('modules', module) || [];
            modules.map(module => this.storeRelatedModule(module, module));
            const components = Reflect.getMetadata('components', module) || [];
            components.map(component => this.storeComponent(component, module));
            const controllers = Reflect.getMetadata('controllers', module) || [];
            controllers.map(controller => this.storeController(controller, module));
        });
    }
    storeRelatedModule(related, module) {
        this.container.addRelatedModule(related, module);
    }
    storeComponent(component, module) {
        this.container.addComponent(component, module);
    }
    storeController(controller, module) {
        this.container.addController(controller, module);
    }
}
//# sourceMappingURL=scanner.js.map