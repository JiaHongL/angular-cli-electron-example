import { Component } from '@angular/core';
import * as electron from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  title = 'app works!';

  openWeb() {
    let url = 'https://electron.atom.io/';
    electron.shell.openExternal(url);
  }

  openApplication() {
    electron.remote.dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory']
    }, (value) => {
      let files = value;
      if (typeof files != "undefined") {
        electron.shell.openItem(files[0]);
      }
    });
  }

}
