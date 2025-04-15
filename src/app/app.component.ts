import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TraficComponent } from "./dashboard/trafic/trafic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TicketsComponent, TraficComponent],
})
export class AppComponent {

}
