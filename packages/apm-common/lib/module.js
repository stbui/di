/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
/**
 * module
 * - `controllers`
 * - `providers`
 * @param metadata
 */
export function Module(metadata) {
    overrideModuleMetadata(metadata);
    return (target) => {
        for (const property in metadata) {
            if (metadata.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, metadata[property], target);
            }
        }
    };
}
function overrideModuleMetadata(moduleMetadata) {
    moduleMetadata.modules = moduleMetadata.imports ? moduleMetadata.imports : moduleMetadata.modules;
    moduleMetadata.components = moduleMetadata.providers ? moduleMetadata.providers : moduleMetadata.components;
}
//# sourceMappingURL=module.js.map