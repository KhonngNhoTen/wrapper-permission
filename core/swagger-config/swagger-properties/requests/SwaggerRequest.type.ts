export type ContentType ="application/json" | "application/xml" | "application/x-www-form-urlencoded" | "text/plain" | "image/png" | "multipart/form-data" | "application/pdf"
export interface SwaggerRequest {
    description: string,
    required: boolean,
    content: {
        [key in ContentType] : any
    } []
}
