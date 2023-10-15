export interface PermissionAttributes {
  name: string;
  description: string;
  id: string;
  enable: boolean;
  url: string;
}

export abstract class Permission {
  name: string = "";
  description: string = "";
  id: string = "";
  enable: boolean = true;
  url: string = "";

  constructor(options: PermissionAttributes) {
    this.description = options.description;
    this.id = options.id;
    this.name = options.name;
    this.enable = options.enable;
  }

  /**
   * Register perrmission for route
   * @param router
   */
  abstract register(router: any): void;
}
