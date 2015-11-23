import {provide, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import { DataService } from './data-service';
import {AppComponent} from './app';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, DataService,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);