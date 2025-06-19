import {
  Component,
  ElementRef,
  EventEmitter,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { Ticket } from '../ticket.modal';

@Component({
  selector: 'app-new-ticket',
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<Ticket>();

  onSubmit(title: string, description: string) {
    // console.log(title, description);
    if (!title || !description) {
      return;
    }

    const ticket: Ticket = {
      id: Date.now(),
      title,
      request: description,
      status: 'open',
    };
    this.add.emit(ticket);
    this.form().nativeElement.reset();
  }
}
