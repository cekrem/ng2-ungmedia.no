var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var data_service_1 = require('./data-service');
var app_1 = require('./app');
angular2_1.bootstrap(app_1.AppComponent, [
    router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, data_service_1.DataService,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=bootstrap.js.map