import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CategoryComponent } from './category/category.component';
import { CardComponent } from './card/card.component';
import { FilterPipe } from './shared/filter.pipe';
import { CartComponent } from './cart/cart.component';
import { GetAllCategoriesComponent } from './get-all-categories/get-all-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    AdminPanelComponent,
    ProductsComponent,
    AddProductComponent,
    UserListComponent,
    GetAllProductsComponent,
    PopUpComponent,
    CategoryComponent,
    CardComponent,
    FilterPipe,
    CartComponent,
    GetAllCategoriesComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
