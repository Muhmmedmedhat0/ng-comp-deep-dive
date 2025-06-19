import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.modal';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  close = output<void>();

  detailsVisible = signal<boolean>(false);

  onToggleClick() {
    this.detailsVisible.update((prev) => !prev);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
