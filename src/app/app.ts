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
  public loaded: any;
  /*public data: any;*/

  constructor(DataService: DataService) {
    this.loaded = DataService.loaded;
	/*this.data = 0;
	
	let tempArray = [];
	
	let myEmitter = new EventEmitter(true);
	myEmitter.subscribe(data => {
		tempArray.push(data);
		this.data = JSON.parse(JSON.stringify(tempArray));
	});

	setTimeout(() => myEmitter.next(1), 1000);
	setTimeout(() => myEmitter.next(2), 2000);
	setTimeout(() => myEmitter.next(3), 3000);
	setTimeout(() => myEmitter.next(4), 4000);
	setTimeout(() => myEmitter.next(5), 5000);
	setTimeout(() => myEmitter.next(6), 6000);
	setTimeout(() => myEmitter.next(7), 7000);
	setTimeout(() => myEmitter.next(8), 8000);
	setTimeout(() => myEmitter.next(9), 9000);
	setTimeout(() => myEmitter.next(10), 10000);*/
  }
  
  checkPassword(password) {
    const passphrase = 'MjlzZWtzZXJl';
    
    if(btoa(password) == passphrase) {
      console.log(true);
      return true
    }
  }
}
