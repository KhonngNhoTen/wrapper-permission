export interface PrimitiveTypeSchema {
    type: "integer",
    maximum: number,
    minimum: number
    format : string,
    nullable: boolean,
    pattern: string,
    enum: any[]
}