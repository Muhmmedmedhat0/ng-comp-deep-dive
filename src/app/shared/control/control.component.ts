import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // enable shadow DOM encapsulation for this component
  // This will prevent styles from leaking out of this component and affecting other components
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>();

  private element = inject(ElementRef);

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Control clicked');
    console.log(this.element.nativeElement);
    console.log(this.control());
  }
}
