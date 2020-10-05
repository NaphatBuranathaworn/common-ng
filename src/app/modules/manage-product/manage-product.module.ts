import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductRoutingModule } from './manage-product-routing.module';
import { ManageProductComponent } from './manage-product.component';
import { ListProductComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [ManageProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    ManageProductRoutingModule
  ]
})
export class ManageProductModule { }
