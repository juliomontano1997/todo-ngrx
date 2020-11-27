import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSmartComponent } from './todo-list/containers/list-smart.component';

const routes: Routes = [{ path: '', component: ListSmartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
