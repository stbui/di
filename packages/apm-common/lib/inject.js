/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import 'reflect-metadata';
export const isFunction = (fn) => typeof fn === 'function';
export function Inject(token) {
    return (target, key, index) => {
        const args = Reflect.getMetadata('self:paramtypes', target) || [];
        const type = isFunction(token) ? token.name : token;
        args.push({ index, param: type });
        Reflect.defineMetadata('self:paramtypes', args, target);
    };
}
//# sourceMappingURL=inject.js.map