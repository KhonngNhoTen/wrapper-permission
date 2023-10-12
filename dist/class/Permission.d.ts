export interface PermissionAttributes {
    name: string;
    description: string;
    id: string;
    enable: boolean;
    url: string;
}
export declare abstract class Permission {
    name: string;
    description: string;
    id: string;
    enable: boolean;
    url: string;
    constructor(options: PermissionAttributes);
    /**
     * Register perrmission for route
     * @param router
     */
    abstract register(router: any): void;
}
