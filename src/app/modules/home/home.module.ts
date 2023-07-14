import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { HomeComponent } from './pages/home/home.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomeComponent,
    ModalComponent,
  ],
  exports: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [CommonModule, IconModule, FormsModule],
  providers: [IconSetService],
})
export class HomeModule {}
