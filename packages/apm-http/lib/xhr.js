/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
export class XhrFactory {
}
export class BrowserXhr {
    build() {
        return new XMLHttpRequest();
    }
}
export class HttpXhrBackend {
    handle(req) {
        const xhr = new BrowserXhr().build();
        xhr.open(req.method, req.urlWithParams);
        // xhr.setRequestHeader('Content-type', 'text/json');
        // const reqBody = req.serializeBody();
        const reqBody = JSON.stringify(req.body);
        xhr.send(reqBody);
    }
}
//# sourceMappingURL=xhr.js.map