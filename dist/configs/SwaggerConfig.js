"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfig = void 0;
class SwaggerConfig {
    constructor() {
        this._version = "3.0";
        this._title = "";
        this._description = "";
        this._servers = [];
        this._tags = [];
        this._apiVersion = "1.0.0";
        this._schemas = [];
        this._securities = [];
    }
    //#region Getter and Setter
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get servers() {
        return this._servers;
    }
    set servers(value) {
        this._servers = value;
    }
    get tags() {
        return this._tags;
    }
    set tags(value) {
        this._tags = value;
    }
    get apiVersion() {
        return this._apiVersion;
    }
    set apiVersion(value) {
        this._apiVersion = value;
    }
    get schemas() {
        return this._schemas;
    }
    set schemas(value) {
        this._schemas = value;
    }
    get securities() {
        return this._securities;
    }
    set securities(value) {
        this._securities = value;
    }
}
exports.SwaggerConfig = SwaggerConfig;
