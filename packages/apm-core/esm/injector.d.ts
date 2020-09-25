/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
import { Container } from './container';
export declare class Injector {
    private container;
    private instanceLoader;
    constructor(container: Container);
    createInstancesOfDependencies(): void;
    private createPrototypes;
    private createInstances;
    private createInstancesOfComponents;
    private createInstancesOfControllers;
    private createPrototypesOfComponents;
    private createPrototypesOfControllers;
}
