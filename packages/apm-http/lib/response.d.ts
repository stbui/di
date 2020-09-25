/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
export declare abstract class HttpResponseBase {
    readonly header: any;
    readonly status: number;
    readonly statusText: string;
    readonly url: string | null;
    readonly ok: boolean;
    readonly type: any;
    constructor(init: {
        header?: any;
        status?: number;
        statusText?: string;
        url?: string;
    }, defaultStatus?: number, defaultStatusText?: string);
}
export declare class HttpResponse<T> extends HttpResponseBase {
    readonly body: T | null;
    readonly type: any;
    constructor(init?: {
        body?: T | null;
        header?: any;
        status?: number;
        statusText?: string;
        url?: string;
    });
}
