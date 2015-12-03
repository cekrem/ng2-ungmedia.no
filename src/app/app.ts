import { Component, EventEmitter, NgIf, Observable } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { DataService } from './data-service';
import { MainComponent } from './main';
import { PageComponent } from './page';


@Component({
  selector: 'um-app',
  templateUrl: './app/app.html',
  directives: [ROUTER_DIRECTIVES, NgIf]
})
@RouteConfig([
  { path: '/', as: 'Main', component: MainComponent },
  { path: '/page:page', as: 'Page', component: PageComponent }
])

export class AppComponent {
  private input: string[];
  public inputPassphrase: string;
  
  constructor() {
    this.input = [];
   }
  
  catchInput(event) {    
    let char = String.fromCharCode(event.keyCode);
    this.input.push(char);
    
    if(this.input.length > 8) {
      let string = this.input.join('');
      let password = string.substr(-9);
      
      this.inputPassphrase = btoa(password);
    }
  }
  
  checkPassword(inputPassphrase) {
    const passphrase = 'MjlTRUtTRVJF';
    
    if(inputPassphrase == passphrase) {
      console.log(true);
      return true
    }
  }
}
