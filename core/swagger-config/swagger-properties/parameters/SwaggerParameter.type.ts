import { ArrayTypeSchema } from "../schemas/ArrayTypeSchema"
import { ObjectTypeSchema } from "../schemas/ObjectTypeSchema"
import { PrimitiveTypeSchema } from "../schemas/PrimitiveTypeSchema"

export type SwaggerParameter = {
    name: string,
    in: "path"| "query" | "header" |  "cookie",
    required: boolean,
    description: string,
    schema: ArrayTypeSchema | ObjectTypeSchema | PrimitiveTypeSchema
    examples:{ [name: string] :any } []
}