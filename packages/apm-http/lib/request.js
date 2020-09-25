/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
export class HttpRequest {
    constructor(method, url, third, init) {
        this.body = null;
        this.reportProgress = false;
        this.withCredentials = false;
        this.reponseType = 'json';
        this.method = method.toUpperCase();
        this.urlWithParams = url;
        this.body = third ? third : null;
    }
    serializeBody() {
        if (this.body === null) {
            return null;
        }
        return JSON.stringify(this.body);
    }
}
//# sourceMappingURL=request.js.map