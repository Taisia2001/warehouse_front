import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {WarehouseModule} from './modules/warehouse/warehouse.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    WarehouseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
