export declare class SwaggerConfig {
    private _version;
    private _title;
    private _description;
    private _servers;
    private _tags;
    private _apiVersion;
    private _schemas;
    private _securities;
    constructor();
    get version(): string;
    set version(value: string);
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    get servers(): string[];
    set servers(value: string[]);
    get tags(): string[];
    set tags(value: string[]);
    get apiVersion(): string;
    set apiVersion(value: string);
    get schemas(): Object[];
    set schemas(value: Object[]);
    get securities(): Object[];
    set securities(value: Object[]);
}
