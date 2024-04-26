import { Component } from '@angular/core';

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html',
  styleUrl: './task-four.component.scss'
})
export class TaskFourComponent {

  protected inputText: string = 'Hello World';

  protected onClick(): void {
    alert('I was triggered by an event');
  }
}
