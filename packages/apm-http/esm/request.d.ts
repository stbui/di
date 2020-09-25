/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
export declare class HttpRequest<T> {
    readonly body: T | null;
    readonly headers: any;
    readonly reportProgress: boolean;
    readonly withCredentials: boolean;
    readonly reponseType: 'json' | 'text';
    readonly method: string;
    readonly params: any;
    readonly urlWithParams: string;
    constructor(method: 'GET', url: string, third?: T | {
        params?: any;
        withCrendentials: boolean;
    }, init?: {
        headers?: any;
        reportProgress?: boolean;
        params: any;
        reponseType: 'json' | 'text';
        withCredentials: boolean;
    });
    serializeBody(): string | null;
}
