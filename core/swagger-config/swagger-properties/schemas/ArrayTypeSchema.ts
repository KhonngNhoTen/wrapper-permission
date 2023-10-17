import { FileTypeSchema } from "./FileTypeSchema";
import { ObjectTypeSchema } from "./ObjectTypeSchema";
import { PrimitiveTypeSchema } from "./PrimitiveTypeSchema";

export interface ArrayTypeSchema {
    type: "array",
    items: ArrayTypeSchema | PrimitiveTypeSchema | ObjectTypeSchema | FileTypeSchema
}