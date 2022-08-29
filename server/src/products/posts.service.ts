import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post, PostDocument } from './schemas/posts.schema';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Post.name) private productModel: Model<PostDocument>) {
  }

  async getAll(): Promise<Post[]> {
    return this.productModel.find().exec()
  }

  async getById(id: string): Promise<Post> {
    return this.productModel.findById(id)
  }

  async create(productDto: CreatePostDto): Promise<Post> {
    const newProduct = new this.productModel(productDto)
    return newProduct.save()
  }

  async remove(id: string): Promise<Post> {
    return this.productModel.findByIdAndRemove(id)
  }

  async update(id: string, productDto: UpdatePostDto): Promise<Post> {
    return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
  }
}