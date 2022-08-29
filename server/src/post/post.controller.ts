import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OnePost } from './schemas/onePost.schema';
import { PostService } from './post.service';
import { CreateOnePostDto } from './dto/create-onepost.dto';
import { UpdateOnePostDto } from './dto/update-onepost.dto';

@Controller('post')
export class PostController {
    PostService: any;

    constructor() {}

    @Get()
    async getAll(): Promise<OnePost[]>{
        return this.PostService.getAll()
    }

    @Get(':id')
  getOne(@Param('id') id: string): Promise<OnePost> {
    return this.PostService.getById(id)
  }

  @Post()
  create(@Body() createProductDto: CreateOnePostDto):  Promise<OnePost>{
    return this.PostService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string):  Promise<OnePost>{
    return this.PostService.remove(id)
  }

  @Put(':id')
  update(@Body() updateOnePostDto: UpdateOnePostDto, @Param('id') id: string): Promise<OnePost> {
    return this.PostService.update(id, updateOnePostDto)
  }
}
