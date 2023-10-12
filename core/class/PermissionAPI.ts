import { GroupPermission } from "./GroupPermission";
import { Permission, PermissionAttributes } from "./Permission";

export interface PermissionAPIAttributes extends PermissionAttributes {
  handler: Promise<any>;
  middlewares: Promise<any>[];
  baseUrl: string;
  grouPermission: GroupPermission;
  method: string;
}

export class PermissionAPI extends Permission {
  handler: Promise<any> | null = null;
  middlewares: Promise<any>[] = [];
  baseUrl: string = "";
  method: string = "";
  grouPermission: GroupPermission | null = null;

  constructor(options: PermissionAPIAttributes) {
    super(options);
    this.handler = options.handler;
    this.middlewares = options.middlewares;
    this.grouPermission = options.grouPermission;
    this.baseUrl = options.baseUrl ?? "";
    this.splitUrl();

    this.splitUrl.bind(this);
  }

  public set GroupPermission(value: GroupPermission) {
    this.grouPermission = value;
    this.baseUrl = value.url;
  }

  /**
   * Format url: <Method> <url>. This function split method and url.
   */
  private splitUrl() {
    const [method, url] = this.url.split(" ");
    this.method = method.toLowerCase();
    this.url = this.baseUrl + url;
  }

  register(router: any): void {
    const middlewares = [...this.middlewares, this.handler];
    router[this.method](this.url, middlewares);
  }
}
