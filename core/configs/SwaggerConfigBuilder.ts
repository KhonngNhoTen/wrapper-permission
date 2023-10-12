import { SwaggerConfig } from "./SwaggerConfig";

export class SwaggerConfigBuilder {
  swaggerConfig: SwaggerConfig;
  constructor() {
    this.swaggerConfig = new SwaggerConfig();
  }

  addVersion(version: string): SwaggerConfigBuilder {
    this.swaggerConfig.version = version;
    return this;
  }

  build() {
    return this.swaggerConfig;
  }
}
