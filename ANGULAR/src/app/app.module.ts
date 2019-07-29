import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Client/list/list.component';
import { AddComponent } from './Client/add/add.component';
import { EditComponent } from './Client/edit/edit.component';
import { DeleteComponent } from './Client/delete/delete.component';
import { FormsModule } from "@angular/forms";
import { ServiceService } from "../app/Services/service.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './Client/search/search.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [AddComponent],
  providers: [ServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
