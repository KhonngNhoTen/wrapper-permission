"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionAPI = void 0;
const Permission_1 = require("./Permission");
class PermissionAPI extends Permission_1.Permission {
    constructor(options) {
        var _a;
        super(options);
        this.handler = null;
        this.middlewares = [];
        this.baseUrl = "";
        this.method = "";
        this.grouPermission = null;
        this.handler = options.handler;
        this.middlewares = options.middlewares;
        this.grouPermission = options.grouPermission;
        this.baseUrl = (_a = options.baseUrl) !== null && _a !== void 0 ? _a : "";
        this.splitUrl();
        this.splitUrl.bind(this);
    }
    set GroupPermission(value) {
        this.grouPermission = value;
        this.baseUrl = value.url;
    }
    /**
     * Format url: <Method> <url>. This function split method and url.
     */
    splitUrl() {
        const [method, url] = this.url.split(" ");
        this.method = method.toLowerCase();
        this.url = this.baseUrl + url;
    }
    register(router) {
        const middlewares = [...this.middlewares, this.handler];
        router[this.method](this.url, middlewares);
    }
}
exports.PermissionAPI = PermissionAPI;
