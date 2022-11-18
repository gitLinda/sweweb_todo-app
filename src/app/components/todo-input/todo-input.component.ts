import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  @Input() todoList: Array<Todo> = [];
  @Output() updateTodoList = new EventEmitter<Array<Todo>>()

  name: string = '';
  value: string ='';

  constructor() { }

  addTodo(): void {
    const newTodo = {"name": this.name, "todo": this.value};
    this.todoList.push(newTodo);
    this.value = '';
    this.name = '';
    this.updateTodoList.emit(this.todoList);
  }

}
