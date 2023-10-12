"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
class Permission {
    constructor(options) {
        this.name = "";
        this.description = "";
        this.id = "";
        this.enable = true;
        this.url = "";
        this.description = options.description;
        this.id = options.id;
        this.name = options.name;
        this.enable = options.enable;
    }
}
exports.Permission = Permission;
