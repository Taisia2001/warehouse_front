import {NgModule} from '@angular/core';
import {AppComponent} from '../../app.component';
import {LoginComponent} from '../auth/login/login.component';
import {HeaderComponent} from '../shared/header/header.component';
import {WarehouseComponent} from './warehouse.component';
import {CategoryListComponent} from './category_list/category-list.component';
import {ProductListComponent} from './product_list/product-list.component';
import {AddProductComponent} from './add_product/add-product.component';
import {EditProductComponent} from './edit_product/edit-product.component';
import {EditCategoryComponent} from './edit_category/edit-category.component';
import {AddCategoryComponent} from './add_category/add-category.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FilterPipe} from '../shared/filter.pipe';
import {AuthGuard} from '../../guards/auth.guard';
import {ChangeGuard} from '../../guards/change.guard';
import {UserListComponent} from './user-list/user-list.component';
import {AdminGuard} from '../../guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: WarehouseComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'products',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductListComponent }
    ]
  },
  {
    path: 'categories',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoryListComponent}
    ]
  },
  {
    path: 'category/:id',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductListComponent}
    ]
  },
  {
    path: 'addCategory',
    component: WarehouseComponent,
    canActivate: [AuthGuard, ChangeGuard],
    children: [
      { path: '', component: AddCategoryComponent}
    ]
  },
  {
    path: 'users',
    component: WarehouseComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', component: UserListComponent}
    ]
  },
  {
    path: 'addProduct',
    component: WarehouseComponent,
    canActivate: [AuthGuard, ChangeGuard],
    children: [
      {path: '', component: AddProductComponent, }
    ]
  },
  {
    path: 'editCategory/:id',
    component: WarehouseComponent,
    canActivate: [AuthGuard, ChangeGuard],
    children: [
      { path: '', component: EditCategoryComponent}
    ]
  },
  {
    path: 'editProduct/:id',
    component: WarehouseComponent,
    canActivate: [AuthGuard, ChangeGuard],
    children: [
      {path: '', component: EditProductComponent, }
    ]
  },
  {path: '**',
    component: WarehouseComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: ProductListComponent, }
    ]}

];
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    WarehouseComponent,
    CategoryListComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    FilterPipe,
    UserListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports: [
    WarehouseComponent
  ],
  bootstrap: [AppComponent]
})
export class WarehouseModule {

}
