/* Angular Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Shared Modules */
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
  ]
})

export class SharedModule { }
