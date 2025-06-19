import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    // This is a simple example of using signals to manage state.
    // The currentStatus signal will be updated every 5 seconds.
    // The component will automatically re-render when the signal changes.
    effect(() => {
      // console.log(`Current server status: ${this.currentStatus()}`);
    });
  }
  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random(); // random number between 0 and 0.9999
      this.currentStatus.set(
        random > 0.5 ? 'online' : random > 0.9 ? 'offline' : 'unknown'
      );
    }, 5000);

    // clearInterval when component is destroyed
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
