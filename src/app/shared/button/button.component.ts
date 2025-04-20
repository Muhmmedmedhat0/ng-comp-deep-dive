import { Component, input } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  title = input.required<string>();
  icon = input.required<string>();
}
