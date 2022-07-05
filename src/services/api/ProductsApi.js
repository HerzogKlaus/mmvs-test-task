import {Http} from "@/services/Http";

export class ProductsApi {
  static async getAll() {
    return await Http.get('http://localhost:3000/products');
  }
}