import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OnePostDocument = OnePost & Document

@Schema()
export class OnePost{
    @Prop()
    title: String

    @Prop()
    text: String 
} 

export const OnePostSchema = SchemaFactory.createForClass(OnePost)