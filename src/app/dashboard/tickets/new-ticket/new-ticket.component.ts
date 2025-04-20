import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-new-ticket',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // title = input.required<string>();
  // request = input.required<string>();
}
