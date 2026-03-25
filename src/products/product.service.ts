import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'products.json');

  findAll(): Product[] {
    try {
      if (!fs.existsSync(this.dataPath)) {
        console.warn(
          `File not found at ${this.dataPath}, returning empty array.`,
        );
        return [];
      }

      const rawData = fs.readFileSync(this.dataPath, 'utf-8');
      const users = rawData ? (JSON.parse(rawData) as Product[]) : [];

      return users;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error('Error reading or parsing users file:', errorMessage);
      return [];
    }
  }
}
