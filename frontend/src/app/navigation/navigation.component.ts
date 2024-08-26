import {Component, EventEmitter, Output} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() showToast = new EventEmitter<boolean>();

  onToastShown() {
    this.showToast.emit(true);
  }
}
