import { SwaggerConfig } from "./SwaggerConfig";
export declare class SwaggerConfigBuilder {
    swaggerConfig: SwaggerConfig;
    constructor();
    addVersion(version: string): SwaggerConfigBuilder;
    build(): SwaggerConfig;
}
