import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'products.json');

  findAll(): Purchase[] {
    const rawData = fs.readFileSync(this.dataPath, 'utf-8');
    const users = JSON.parse(rawData) as Purchase[];
    return users;
  }
}
