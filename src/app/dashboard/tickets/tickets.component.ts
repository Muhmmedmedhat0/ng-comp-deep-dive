import { Component, signal } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.modal';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  onAddTicket(ticket: Ticket) {
    this.tickets.update((currentTickets) => [...currentTickets, ticket]);
  }
}
