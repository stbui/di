/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
export declare abstract class HttpHander {
    abstract handle(req: any): any;
}
export declare abstract class HttpBackend implements HttpHander {
    abstract handle(req: any): any;
}
