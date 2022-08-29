import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post as impPost,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ProductsService } from './posts.service';
import { Post } from './schemas/posts.schema';

// express
// app.use((req, res, next) => {
//   res.status(201).end('Poka')
// })

@Controller('products')
export class PostController {

  constructor(private readonly productsService: ProductsService) {
  }

  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Poke')
  //   return 'getAll'
  // }

  @Get()
  getAll(): Promise<Post[]> {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Post> {
    return this.productsService.getById(id)
  }

  @impPost()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreatePostDto): Promise<Post> {
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Post> {
    return this.productsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdatePostDto, @Param('id') id: string): Promise<Post> {
    return this.productsService.update(id, updateProductDto)
  }

}
