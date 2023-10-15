import { ObjectTypeSchema } from "../schemas/ObjectTypeSchema"

enum ContentType  {
    JSON="application/json",
    XML="application/xml",
    URLENDCODED="application/x-www-form-urlencoded",
    STREAM="multipart/form-data",
    TEXT="text/plain; charset=utf-8",
    HTML="text/html",
    PDF="application/pdf",
    IMG="multipart/form-data",
}
export class SwaggerMediafileFactory {
    create(type: ContentType, content: ObjectTypeSchema) {}

    createImageContent() {
       return {
        [ContentType.IMG]: {
            schema: {
                type: "string",
                format: "binary" 
            }
        }
       }
    }
}