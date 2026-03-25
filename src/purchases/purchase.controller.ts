import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('product')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get('products')
  findall() {
    const result = this.purchaseService.findAll();
    return {
      succes: true,
      data: result,
      message: 'Fetched products successfully',
    };
  }
}
