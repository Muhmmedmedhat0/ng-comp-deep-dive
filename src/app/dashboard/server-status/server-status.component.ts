import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  ngOnInit() {
    setInterval(() => {
      const random = Math.random(); // random number between 0 and 0.9999
      this.currentStatus =
        random > 0.5 ? 'online' : random > 0.9 ? 'offline' : 'unknown';
    }, 5000);
  }
}
