export class SwaggerConfig {
  private _version: string = "3.0";
  private _title: string = "";
  private _description: string = "";
  private _servers: string[] = [];
  private _tags: string[] = [];
  private _apiVersion: string = "1.0.0";
  private _schemas: Object[] = [];
  private _securities: Object[] = [];
  constructor() {}

  //#region Getter and Setter
  public get version(): string {
    return this._version;
  }
  public set version(value: string) {
    this._version = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get servers(): string[] {
    return this._servers;
  }
  public set servers(value: string[]) {
    this._servers = value;
  }

  public get tags(): string[] {
    return this._tags;
  }
  public set tags(value: string[]) {
    this._tags = value;
  }

  public get apiVersion(): string {
    return this._apiVersion;
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }

  public get schemas(): Object[] {
    return this._schemas;
  }
  public set schemas(value: Object[]) {
    this._schemas = value;
  }

  public get securities(): Object[] {
    return this._securities;
  }
  public set securities(value: Object[]) {
    this._securities = value;
  }
  //#endregion
}
