import { SwaggerParameter } from "./parameters/SwaggerParameter.type"
import { SwaggerResponse } from "./SwaggerResponse.type"

export type SwaggerPath = {
    description: string,
    summary: string,
    parameters: SwaggerParameter[],
    responses: SwaggerResponse[]
}
export type SwaggerCollectionPath = {
    [url: string] : {
        [method : string] : SwaggerPath
    }
}