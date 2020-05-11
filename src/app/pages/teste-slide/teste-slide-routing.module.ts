import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteSlidePage } from './teste-slide.page';

const routes: Routes = [
  {
    path: '',
    component: TesteSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteSlidePageRoutingModule {}
