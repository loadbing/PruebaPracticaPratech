import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Client/list/list.component';
import { AddComponent } from './Client/add/add.component';
import { EditComponent } from './Client/edit/edit.component';
import { DeleteComponent } from './Client/delete/delete.component';
import { SearchComponent } from './Client/search/search.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
{path:'RouteList', component:ListComponent},
{path:'RouteAdd', component:AddComponent},
{path:'RouteEdit', component:EditComponent},
{path:'RouteDelete', component:DeleteComponent},
{path:'RouteSearch', component:SearchComponent},
{path:'RouteMenu', component:MenuComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
