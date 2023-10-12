import { Permission, PermissionAttributes } from "./Permission";
import { PermissionAPI } from "./PermissionAPI";

export interface GroupPermissionAttribute extends PermissionAttributes {
  group: string[];
  permissions: Permission[];
}

export class GroupPermission extends Permission {
  group: string[] = [];
  permissions: Permission[] = [];
  constructor(optons: GroupPermissionAttribute) {
    super(optons);
    this.group = optons.group;
    this.permissions = optons.permissions;
  }
  addPermission(permission: PermissionAPI): GroupPermission {
    permission.GroupPermission = this;
    this.permissions.push(permission);
    return this;
  }
  register(router: any): void {
    for (let i = 0; i < this.permissions.length; i++) {
      const permission = this.permissions[i];
      permission.register(router);
    }
  }
}
