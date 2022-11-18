import {Component, Input} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todoList: Array<Todo> = [];

  constructor() { }

  deleteTodo(index: number): void {
    this.todoList.splice(index, 1);
  }

}
