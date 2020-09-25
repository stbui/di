/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import { HttpBackend } from './backend';
export declare abstract class XhrFactory {
    abstract build(): any;
}
export declare class BrowserXhr implements XhrFactory {
    build(): XMLHttpRequest;
}
export declare class HttpXhrBackend implements HttpBackend {
    handle(req: any): void;
}
