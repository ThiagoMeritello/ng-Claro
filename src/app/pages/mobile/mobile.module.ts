import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MobileRoutingModule } from './mobile.route';
import { MobileAppComponent } from './mobile.app.component';
import { MobileClaroComponent } from './mobile-claro/mobile-claro.component';
import { MobileClaroEditComponent } from './mobile-claro-edit/mobile-claro-edit.component';
import { MobileClaroListComponent } from './mobile-claro-list/mobile-claro-list.component';



@NgModule({
  declarations: [
    MobileClaroComponent,
    MobileAppComponent,
    MobileClaroEditComponent,
    MobileClaroListComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MobileModule { }
