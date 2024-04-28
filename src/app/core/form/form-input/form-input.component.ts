import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { INPUT_FORM_MESSAGES } from './form-input.messages';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() formGrp!: FormGroup;
  @Input() formCtrlName: string = '';
  @Input() appeareance: MatFormFieldAppearance = 'outline';
  @Input() label: string = '';
  @Input() inputType: string = 'text';

  protected messages: any = INPUT_FORM_MESSAGES;
}
