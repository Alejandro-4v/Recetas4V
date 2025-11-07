import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
})
export class ButtonComponent {
  @Input() text: string = 'Botón'; 

  @Input() colorClass: string = 'btn-primary';

  @Output() clickEvent = new EventEmitter<void>();

  handleClick(): void {
    this.clickEvent.emit();
  }
}