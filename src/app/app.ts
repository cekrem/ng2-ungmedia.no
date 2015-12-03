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
  constructor() { }
  
  checkPassword(password) {
    const passphrase = 'MjlzZWtzZXJl';
    
    if(btoa(password) == passphrase) {
      console.log(true);
      return true
    }
  }
}
