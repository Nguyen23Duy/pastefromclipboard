import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name : string = 'Angular';
  
  public getDataFromClipBoard(): void {
    navigator['clipboard'].readText().then((data) => {
      this.name = data;
    });
  }
}
