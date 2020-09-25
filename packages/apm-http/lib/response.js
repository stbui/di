/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
export class HttpResponseBase {
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        this.header = init.header;
        this.status = init.status || defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        this.ok = this.status >= 200 && this.status <= 300;
    }
}
export class HttpResponse extends HttpResponseBase {
    constructor(init = {}) {
        super(init);
        this.body = init.body !== undefined ? init.body : null;
    }
}
//# sourceMappingURL=response.js.map