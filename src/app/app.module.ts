import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardDirective } from './Directives/product-card.directive';
import { NationalIDBirthYearPipe } from './Pipes/national-id-birth-year.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardNumberPipe } from './Pipes/credit-card-number.pipe';
import { MasterComponent } from './components/master/master.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    NavbarComponent,
    ProductCardDirective,
    NationalIDBirthYearPipe,
    CreditCardNumberPipe,
    MasterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
