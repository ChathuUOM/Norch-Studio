import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Norch-Studio';
  isChecked: boolean = false;

  constructor(private elementRef: ElementRef) {}

  // Toggle between "Light Theme" and "Dark Theme"
  toggleTheme(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
