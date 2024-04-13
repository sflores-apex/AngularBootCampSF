import { Component } from '@angular/core';
import { InjectableByRootService } from '../task-six/injectable-by-root.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {

  constructor(protected readonly injectableByRootService: InjectableByRootService) { }
}
