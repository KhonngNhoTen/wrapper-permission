export interface PermissionAttributes {
    name: string;
    description: string;
    id: string;
    enable: boolean;
    url: string;
}
export declare abstract class Permission {
    protected name: string;
    protected description: string;
    protected id: string;
    protected enable: boolean;
    protected url: string;
    constructor(options: PermissionAttributes);
    /**
     * Register perrmission for route
     * @param router
     */
    abstract register(router: any): void;
}
