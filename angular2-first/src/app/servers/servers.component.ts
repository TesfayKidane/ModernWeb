import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = [];
  constructor() {
     setTimeout(() => { this.allowNewServer = true; }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created, Name is : ' + this.serverName;
  }

  onUpdateServer(event: any) {
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
