import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { ValidationFieldComponent } from './modules/shared/validation-field/validation-field.component';
import { WarehouseComponent } from './modules/warehouse/warehouse.component';
import { CategoryListComponent } from './modules/warehouse/category_list/category-list.component';
import { ProductListComponent } from './modules/warehouse/product_list/product-list.component';
import { AddProductComponent } from './modules/warehouse/add_product/add-product.component';
import { EditProductComponent } from './modules/warehouse/edit_product/edit-product.component';
import { EditCategoryComponent } from './modules/warehouse/edit_category/edit-category.component';
import { AddCategoryComponent } from './modules/warehouse/add_category/add-category.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    HeaderComponent,
    ValidationFieldComponent,
    WarehouseComponent,
    CategoryListComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
