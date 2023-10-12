"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupPermission = void 0;
const Permission_1 = require("./Permission");
class GroupPermission extends Permission_1.Permission {
    constructor(optons) {
        super(optons);
        this.group = [];
        this.permissions = [];
        this.group = optons.group;
        this.permissions = optons.permissions;
    }
    addPermission(permission) {
        permission.GroupPermission = this;
        this.permissions.push(permission);
        return this;
    }
    register(router) {
        for (let i = 0; i < this.permissions.length; i++) {
            const permission = this.permissions[i];
            permission.register(router);
        }
    }
}
exports.GroupPermission = GroupPermission;
