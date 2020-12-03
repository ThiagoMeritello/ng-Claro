import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Mobile extends BaseResourceModel{
    model: string;
    price: number;
    brand: string;
    photo: string;
    date: string;

    static fromJson(jsonData: any): Mobile {
      return Object.assign(new Mobile(), jsonData);
    }
  }
