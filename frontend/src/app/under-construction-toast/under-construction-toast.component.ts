import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-under-construction-toast',
  standalone: true,
  imports: [],
  templateUrl: './under-construction-toast.component.html',
  styleUrl: './under-construction-toast.component.css'
})
export class UnderConstructionToastComponent {
  @Output() close = new EventEmitter<boolean>();

  onToastHidden() {
    this.close.emit(false);
  }
}
