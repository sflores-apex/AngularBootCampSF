import { Injectable } from '@angular/core';

@Injectable()
export class InjectableByModuleService {

  numbers: string[] = ['one', 'two'];

  constructor() { }
}
