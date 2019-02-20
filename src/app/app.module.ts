import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MatChipsModule,MatInputModule,MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { FilterSectionComponent } from './Filter-section/filter-section.component';
import { TagsSectionComponent } from './tags-section/tags-section.component';
import { TableSectionComponent } from './Table-section/table-section.component';




@NgModule({
  declarations: [
    AppComponent,
    FilterSectionComponent,
    TagsSectionComponent,
    TableSectionComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxPaginationModule
  ],
  exports:[
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
