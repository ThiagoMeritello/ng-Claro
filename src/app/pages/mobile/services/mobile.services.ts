import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Mobile } from '../models/Mobile';

@Injectable({
    providedIn: 'root'
  })
export class MobileServices extends BaseResourceService<Mobile> {
    constructor(protected injector: Injector) {
        super('mobile', injector, Mobile.fromJson);
    }
}
