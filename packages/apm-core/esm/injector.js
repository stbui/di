/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
import { InstanceLoader } from './instance-loader';
//注射器，依赖注入
export class Injector {
    constructor(container) {
        this.container = container;
        this.instanceLoader = new InstanceLoader();
    }
    createInstancesOfDependencies() {
        const modules = this.container.getModules();
        this.createPrototypes(modules);
        this.createInstances(modules);
    }
    createPrototypes(modules) {
        modules.forEach(module => {
            this.createPrototypesOfComponents(module);
            this.createPrototypesOfControllers(module);
        });
    }
    createInstances(modules) {
        modules.forEach(module => {
            this.createInstancesOfComponents(module);
            this.createInstancesOfControllers(module);
        });
    }
    createInstancesOfComponents(module) {
        module.components.forEach((wrapper, componentType) => {
            this.instanceLoader.loadInstanceOfComponent(componentType, module);
        });
    }
    createInstancesOfControllers(module) {
        module.controllers.forEach((wrapper, componentType) => {
            this.instanceLoader.loadInstanceOfController(componentType, module);
        });
    }
    createPrototypesOfComponents(module) {
        module.components.forEach((wrapper, componentType) => {
            this.instanceLoader.loadPrototypeOfInstance(componentType, module.components);
        });
    }
    createPrototypesOfControllers(module) {
        module.controllers.forEach((wrapper, componentType) => {
            this.instanceLoader.loadPrototypeOfInstance(componentType, module.controllers);
        });
    }
}
//# sourceMappingURL=injector.js.map