/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import { HttpHander } from './backend';
export declare class HttpInterceptingHandle implements HttpHander {
    protected backend: any;
    constructor(parameters: any);
    handle(req: any): void;
}
export declare class Http {
    post(url: string, params: any): void;
    get(url: string, params: any): void;
    put(url: string, params: any): void;
    delete(url: string, params: any): void;
    request(req: any): void;
}
