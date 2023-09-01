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

    // Handling error

    things = [];
    incrementNumber = 0;

    onAdd(){
        this.incrementNumber++;
        this.things.push('There is '+this.incrementNumber + ' thing')
    }

    onRemove(id:number){
        this.incrementNumber--;
        const position = id;
        this.things.splice(position, 1);
    }

    // Assignment 4
    oddNumbers: number[] = []
    evenNumbers: number[] = []

    onIntervalFired(firedNumber: number) {
        if(firedNumber % 2 === 0){
            this.evenNumbers.push(firedNumber)
        } else {
            this.oddNumbers.push(firedNumber)
        }
    }

    message:string= "";

    onReciveMessage(eventData:string){
        this.message = eventData;
    }

    numbersDEMO = [1,2,3,4,5];
    oddNumbersDEMO = [1,3,5];
    evenNumbersDEMO = [2,4];
    onlyOdd = false;

    constructor(){

    }
}
