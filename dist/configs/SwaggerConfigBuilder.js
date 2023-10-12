"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfigBuilder = void 0;
const SwaggerConfig_1 = require("./SwaggerConfig");
class SwaggerConfigBuilder {
    constructor() {
        this.swaggerConfig = new SwaggerConfig_1.SwaggerConfig();
    }
    addVersion(version) {
        this.swaggerConfig.version = version;
        return this;
    }
    build() {
        return this.swaggerConfig;
    }
}
exports.SwaggerConfigBuilder = SwaggerConfigBuilder;
