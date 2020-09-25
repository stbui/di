/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
export function Controller() {
    return (target) => {
        Reflect.defineMetadata('stbui', 'apm', target);
    };
}
//# sourceMappingURL=controller.js.map