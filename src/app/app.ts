import { Component, NgIf } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { DataService } from './data-service';
import { MainComponent } from './main';
import { PageComponent } from './page';

@Component({
  selector: 'um-app',
  template:'<router-outlet *ng-if="loaded.bool"></router-outlet><p *ng-if="!loaded.bool">Laster data...</p>',
  directives: [ROUTER_DIRECTIVES, NgIf]
})
@RouteConfig([
  { path: '/', as: 'Main', component: MainComponent },
  { path: '/page:page', as: 'Page', component: PageComponent }
])

export class AppComponent {
  public loaded: any;
  
  constructor(DataService: DataService){
    this.loaded = DataService.loaded;
  }
}
