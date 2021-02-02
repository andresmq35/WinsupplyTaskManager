import { Component} from '@angular/core';
import {Task} from './task';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  constructor() { }

  public status: boolean = true;
  public addStatus: boolean = true;
  public addTask: Task = new Task(0, '', '', '');
  // model = [this.task1, this.task2, this.task3, this.task4, this.task5, this.task6, this.task7]
  public tasks: Array<Task> = [
    new Task(1, 'Test Task #1', new Date("12/01/2012").toLocaleDateString(), "Andres Quesada"),
    new Task(2, 'Test Task #2', new Date("12/02/2012").toLocaleDateString(), "Andres Quesada"),
    new Task(3, 'Test Task #3', new Date("12/03/2012").toLocaleDateString(), "Andres Quesada"),
    new Task(4, 'Test Task #4', new Date("12/04/2012").toLocaleDateString(), "Andres Quesada"),
    new Task(5, 'Test Task #5', new Date("12/05/2012").toLocaleDateString(), "Andres Quesada"),
    new Task(6, 'Test Task #6', new Date("12/06/2012").toLocaleDateString(), "Andres Quesada"),
    new Task(7, 'Test Task #7', new Date("12/07/2012").toLocaleDateString(), "Andres Quesada")];
  
  showHide(elementId: string){
    const element = document.getElementById(elementId);
    if (element?.classList.contains('hideChildren')) {
      element.classList.remove('hideChildren');
      element.classList.add('showChildren');
    } else if(element?.classList.contains('showChildren')) {
      element.classList.remove('showChildren');
      element.classList.add('hideChildren');
    }
  }

  addTaskSubmit(f: NgForm) {
    console.log(f.value);
    const addedTask: Task = new Task(this.tasks.length + 1, f.value.name, f.value.date, f.value.assignee);
    this.tasks.push(addedTask);
  }
    
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.tasks); }

}
