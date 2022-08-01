import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MasterComponent } from './components/master/master.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  
  {path:'',component:MainLayoutComponent , children: [
  {path:'home', component: HomeComponent},
  {path:'products', component: MasterComponent},
  {path:'products/:itemID', component: ProductDetailsComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'newProduct', component: AddProductComponent},
  {path:'userRegister', component: UserRegisterComponent},
]},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
