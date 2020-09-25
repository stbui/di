/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import { HttpXhrBackend } from './xhr';
export class HttpInterceptingHandle {
    constructor(parameters) { }
    handle(req) { }
}
export class Http {
    post(url, params) {
        const req = {
            method: 'POST',
            urlWithParams: url,
            body: params,
        };
        this.request(req);
    }
    get(url, params) {
        const req = {
            method: 'GET',
            urlWithParams: url,
            body: params,
        };
        this.request(req);
    }
    put(url, params) { }
    delete(url, params) { }
    request(req) {
        const xhr = new HttpXhrBackend();
        xhr.handle(req);
    }
}
//# sourceMappingURL=client.js.map