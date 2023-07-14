import { Component, DoCheck, EventEmitter, OnInit } from '@angular/core';
import { cilTrash } from '@coreui/icons';
import { ITaskList } from '../../model/itask-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  icons: { cilTrash: string[] } = { cilTrash };
  public showModal: boolean = false;
  public textModal: string = '';
  public choiceModalValue: string = 'n';

  public taskList: Array<ITaskList> = JSON.parse(
    localStorage.getItem('taskList') || '[]'
  );

  public deleteItemOfList(id: number) {
    this.taskList.splice(id, 1);
  }

  public deleteAllItemsOfList() {
    this.taskList = [];
  }

  public showModalFunction(event?: string, index?: number) {
    this.textModal = event || '';
    this.showModal = !this.showModal;
  }

  public choiceModal(event: string) {
    this.choiceModalValue = event;
    if (event === 'y') this.deleteAllItemsOfList();
  }

  public addItemList(text: string) {
    this.taskList.push({
      checked: false,
      task: text,
    });
  }

  public submitItemTaskList(event: string) {
    this.addItemList(event);
  }

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );

    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }
}
