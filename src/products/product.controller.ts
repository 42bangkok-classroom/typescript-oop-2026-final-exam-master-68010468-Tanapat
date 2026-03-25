import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiResponse } from 'src/interfaces/response.interface';
import { Product } from './product.interface';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  findall(){
    const result = this.productService.findAll();
    return {
      success: true,
      data: result,
      message: 'Fetched products successfully',
    };
  }
}
