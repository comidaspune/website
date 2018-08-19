import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactusComponent } from '../contactUs/contactUs.component';

const routes:Routes=[

  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'contactUs',component:ContactusComponent},
  {path :'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [
RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents=[MenuComponent,ContactusComponent,PageNotFoundComponent,HomeComponent];
