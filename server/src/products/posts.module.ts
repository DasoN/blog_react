import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './posts.service';
import { PostController } from './posts.controller';
import { Post, ProductSchema } from './schemas/posts.schema';

@Module({
  providers: [ProductsService],
  controllers: [PostController],
  imports: [
    MongooseModule.forFeature([
      {name: Post.name, schema: ProductSchema}
    ])
  ]
})
export class ProductsModule {
}