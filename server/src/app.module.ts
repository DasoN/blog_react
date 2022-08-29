import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/posts.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://root:qwerty123@cluster0.wmaft0f.mongodb.net/products?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
