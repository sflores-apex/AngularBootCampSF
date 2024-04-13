import { Component } from '@angular/core';
import { InjectableByModuleService } from './injectable-by-module.service';
import { InjectableByRootService } from './injectable-by-root.service';

@Component({
  selector: 'app-task-six',
  templateUrl: './task-six.component.html',
  styleUrl: './task-six.component.scss'
})
export class TaskSixComponent {

  constructor(protected readonly injectableByModuleService: InjectableByModuleService,
    protected readonly injectableByRootService: InjectableByRootService) { }

}
