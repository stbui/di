/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
import { AppModule } from './interfaces/module.interface';
import { Component, InstanceWrapper } from './interfaces/component.interface';
export interface ModuleDependencies {
    components?: Map<Component, InstanceWrapper<Component>>;
}
export declare class Container {
    private readonly modules;
    /**
     * 将模块加入到列表中
     * @param module 模块
     */
    addModule(module: AppModule): void;
    getModules(): Map<AppModule, ModuleDependencies>;
    addRelatedModule(relatedModule: any, module: any): void;
    addComponent(component: any, module: AppModule): void;
    addController(controller: any, module: AppModule): void;
}
