import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recive-radio',
  templateUrl: './recive-radio.component.html',
  styleUrls: ['./recive-radio.component.css']
})
export class ReciveRadioComponent {
    @Input() message:string;
}
