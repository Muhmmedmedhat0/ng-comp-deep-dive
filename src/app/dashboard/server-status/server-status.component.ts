import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    setInterval(() => {
      const random = Math.random();
      this.currentStatus = random > 0.5 ? 'online' : random > 0.9 ? 'offline' : 'unknown';
    }, 5000);
  }
}
