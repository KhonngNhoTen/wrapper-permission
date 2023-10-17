import { FileTypeSchema } from "./FileTypeSchema"
import { PrimitiveTypeSchema } from "./PrimitiveTypeSchema"
interface ArrayTypeSchema {
    type: "array",
    items: ArrayTypeSchema | PrimitiveTypeSchema | ObjectTypeSchema
}
export interface ObjectTypeSchema {
    type: "object",
    properties: {
        [key: string] : PrimitiveTypeSchema | ObjectTypeSchema | ArrayTypeSchema | FileTypeSchema
    },
    required: string[]
}