import { provide, bootstrap } from 'angular2/angular2';
import { ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DataService } from './data-service';
import { AppComponent } from './app';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, HTTP_PROVIDERS, DataService,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);