import { provide, bootstrap } from 'angular2/angular2';
import { ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy } from 'angular2/router';

import { AppComponent } from './app';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);