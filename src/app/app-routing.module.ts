import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AboutComponent } from './components/pages/about/about.component';
import { OrderComponent } from './components/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent,
  },
  {
    path: 'food/:id',
    component: FoodPageComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
