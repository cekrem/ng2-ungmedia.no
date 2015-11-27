import { Component, NgIf, FORM_DIRECTIVES} from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { DataService } from './data-service';
import { MainComponent } from './main';
import { PageComponent } from './page';

@Component({
  selector: 'um-app',
  templateUrl: './app/app.html',
  directives: [ROUTER_DIRECTIVES, NgIf, FORM_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Main', component: MainComponent },
  { path: '/page:page', as: 'Page', component: PageComponent }
])

export class AppComponent {
  public loaded: any;
  public checkPassword: Function;

  constructor(DataService: DataService) {
    this.loaded = DataService.loaded;
    var passphrase = 'MjlzZWtzZXJl';

    this.checkPassword = (password) => {
      if (btoa(password) == passphrase) {
        console.log(true);
        return true;
      }
    }
  }
}
