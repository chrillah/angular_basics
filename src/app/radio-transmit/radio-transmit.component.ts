import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-transmit',
  templateUrl: './radio-transmit.component.html',
  styleUrls: ['./radio-transmit.component.css']
})
export class RadioTransmitComponent {
    @Output() radioSignal = new EventEmitter<string>()
    onTransmit() {
        this.radioSignal.emit('Hello there')
    }
}
