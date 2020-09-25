/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
import { Container } from './container';
import { AppModule } from './interfaces/module.interface';
export declare class DependenciesScanner {
    private container;
    constructor(container: Container);
    scan(module: AppModule): void;
    private scanForModules;
    private storeModule;
    private scanModulesForDependencies;
    private storeRelatedModule;
    private storeComponent;
    private storeController;
}
