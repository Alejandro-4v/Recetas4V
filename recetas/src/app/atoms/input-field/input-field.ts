import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.html',
})
export class InputFieldComponent {
  @Input() type: string = 'text';

  @Input() placeholder: string = 'placeholder';

  @Input() value: string | number = '';

  @Output() valueChange = new EventEmitter<string | number>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}