import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOnePostDto } from './dto/create-onepost.dto';
import { OnePost, OnePostDocument } from './schemas/onePost.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(OnePost.name) private OnePostModel: Model<OnePostDocument>) { }

    async getAll(): Promise<OnePost[]>{
        return this.OnePostModel.find().exec()
    }

    async create(createOnePostDto: CreateOnePostDto): Promise<OnePost>{
        const newOnePost = new this.OnePostModel(createOnePostDto)
        return newOnePost.save()
    }
}
