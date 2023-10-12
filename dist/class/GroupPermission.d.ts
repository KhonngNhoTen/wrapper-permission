import { Permission, PermissionAttributes } from "./Permission";
import { PermissionAPI } from "./PermissionAPI";
export interface GroupPermissionAttribute extends PermissionAttributes {
    group: string[];
    permissions: Permission[];
}
export declare class GroupPermission extends Permission {
    group: string[];
    permissions: Permission[];
    constructor(optons: GroupPermissionAttribute);
    addPermission(permission: PermissionAPI): GroupPermission;
    register(router: any): void;
}
