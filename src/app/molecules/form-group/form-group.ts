import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '@atoms/input-field/input-field';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.html',
  imports: [
    CommonModule,
    InputFieldComponent,
  ],
  standalone: true
})
export class FormGroupComponent {
  @Input() label: string = ''; 

  @Input() type: string = 'text';

  @Input() placeholder: string = '';

  @Input() value: string | number = '';

  @Output() valueChange = new EventEmitter<string | number>();

  // Captura el evento valueChange del InputField Átomo y lo reemite 
  handleValueChange(newValue: string | number): void {
    // Reemitimos el evento hacia el organismo/página
    this.valueChange.emit(newValue);
  }
}