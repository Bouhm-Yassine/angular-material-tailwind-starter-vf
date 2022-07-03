import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPreviewComponent } from './components/main-preview/main-preview.component';
import { PreviewControlsComponent } from './components/preview-controls/preview-controls.component';
import { PreviewContainersComponent } from './components/preview-containers/preview-containers.component';
import { PreviewGeneralComponent } from './components/preview-general/preview-general.component';
import { PreviewTypographyComponent } from './components/preview-typography/preview-typography.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPreviewComponent,
  },
];

@NgModule({
  declarations: [
    MainPreviewComponent,
    PreviewControlsComponent,
    PreviewContainersComponent,
    PreviewGeneralComponent,
    PreviewTypographyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ]
})
export class DashboardModule { }
