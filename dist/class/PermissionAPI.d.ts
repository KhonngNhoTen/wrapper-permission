import { GroupPermission } from "./GroupPermission";
import { Permission, PermissionAttributes } from "./Permission";
export interface PermissionAPIAttributes extends PermissionAttributes {
    handler: Promise<any>;
    middlewares: Promise<any>[];
    baseUrl: string;
    grouPermission: GroupPermission;
    method: string;
}
export declare class PermissionAPI extends Permission {
    handler: Promise<any> | null;
    middlewares: Promise<any>[];
    baseUrl: string;
    method: string;
    grouPermission: GroupPermission | null;
    constructor(options: PermissionAPIAttributes);
    set GroupPermission(value: GroupPermission);
    /**
     * Format url: <Method> <url>. This function split method and url.
     */
    private splitUrl;
    register(router: any): void;
}
