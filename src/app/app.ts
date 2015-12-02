import { Component, NgIf, Observable } from 'angular2/angular2';
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

  constructor(DataService: DataService) {
    this.loaded = DataService.loaded;
/*    
    let myObservable = Observable.create((observer) => {
      observer.next(0);
      setTimeout(()=> observer.next(1), 1000);
      setTimeout(()=> observer.next(2), 2000);
      setTimeout(()=> observer.next(3), 3000);
      setTimeout(()=> observer.next(4), 4000);
      setTimeout(()=> observer.next(5), 5000);
      setTimeout(()=> observer.next(6), 6000);
      setTimeout(()=> observer.next(7), 7000);
      setTimeout(()=> observer.next(8), 8000);
      setTimeout(()=> observer.next(9), 9000);
      setTimeout(()=> observer.next(10), 10000);
    });
    
    myObservable.subscribe((data) => console.log(data));*/
  }
  
  checkPassword(password) {
    const passphrase = 'MjlzZWtzZXJl';
    
    if(btoa(password) == passphrase) {
      console.log(true);
      return true
    }
  }
}
