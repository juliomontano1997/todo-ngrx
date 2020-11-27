import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { addTaskReducer } from './reducers/product.reducer';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [
    BrowserModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot({ tasks: addTaskReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ name: 'Todo list' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
