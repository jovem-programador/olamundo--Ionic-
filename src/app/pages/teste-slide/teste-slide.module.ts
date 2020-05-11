import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteSlidePageRoutingModule } from './teste-slide-routing.module';

import { TesteSlidePage } from './teste-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteSlidePageRoutingModule
  ],
  declarations: [TesteSlidePage]
})
export class TesteSlidePageModule {}
