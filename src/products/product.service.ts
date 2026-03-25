import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'products.json');

  findAll(): Product[] {
    const rawData = fs.readFileSync(this.dataPath, 'utf-8');
    const users = JSON.parse(rawData) as Product[];
    return users;
}
}
