import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments-area',
  templateUrl: './assignments-area.component.html',
  styleUrls: ['./assignments-area.component.css']
})
export class AssignmentsAreaComponent {

    // Assignment 2
    userName = '';
    ok = true;
    onChangeName(){
        this.userName = '';
    }

    // Assignment 3
    displayDetails = false;

    logs = [];
    onToggleDisplay(){
        this.logs.push('Klockan var: '+new Date().getHours() +' | '+new Date().getMinutes() +' | '+ new Date().getSeconds())
        this.displayDetails = !this.displayDetails;
    }

    constructor(){

    }
}
