import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  //   BASICS
  // template: `
  // <div class="container">
  //   <div class="row">
  //     <div class="col-xs-12">
  //       <h3>Udemy_Course_Basics</h3>
  //       <hr />
  //       <app-servers></app-servers>
  //       <div app-servers></div>
  //       <div class="app-servers"></div>
  //       <app-assignments-area></app-assignments-area>
  //     </div>
  //   </div>
  // </div>
  // `,
  styleUrls: ['./app.component.css'],
  //   styles: [
  //     `
  //       h3 {
  //         color: dodgerblue;
  //       }
  //     `,
  //   ],
})
export class AppComponent {
  name = '';
  test() {
    alert(this.name);
  }

  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
