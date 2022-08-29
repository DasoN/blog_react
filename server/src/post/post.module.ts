import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {OnePost, OnePostSchema} from './schemas/onePost.schema'

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [
    MongooseModule.forFeature([
      {name: OnePost.name, schema: OnePostSchema}
    ])
  ]
})
export class PostModule {}
