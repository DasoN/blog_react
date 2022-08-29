import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type PostDocument = Post & Document

@Schema()
export class Post {
  @Prop()
  title: string

  @Prop()
  price: number
}

export const ProductSchema = SchemaFactory.createForClass(Post)