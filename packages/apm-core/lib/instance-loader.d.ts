/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
export declare class InstanceLoader {
    /**
     * 加载组件实例
     * @param componentType 组件的实例包装器
     * @param module 所属Module实例
     */
    loadInstanceOfComponent(componentType: any, module: any): void;
    loadInstanceOfController(componentType: any, module: any): void;
    /**
     * 根据集合加载包装器中实例，此时原型已经创建
     * @param type 组件实例包装器
     * @param collection 所属模块组件集合
     * @param module Module实例
     */
    loadInstance(type: any, collection: any, module: any): void;
    /**
     * 加载组件原型对象
     * @param type 组件的实例包装器
     * @param collection 所属模块组件集合
     */
    loadPrototypeOfInstance<T>(type: any, collection: any): void;
    private resolveConstructorParams;
    /**
     * 解析参数类，获取其包装器
     * @param targetType 所属组件包装器
     * @param param 参数类型
     * @param module
     */
    private resolveSingleParam;
    private resolveComponentInstance;
    /**
     * 扫描指定名称参数组件包装器
     * @param components 所属模块组件集合
     * @param param 参数类名、下标、长度
     * @param module 模块实例
     * @param componentType 所属组件类
     */
    private scanForComponent;
    private scanForComponentInRelatedModules;
}
