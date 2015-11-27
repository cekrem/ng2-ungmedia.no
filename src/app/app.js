var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var data_service_1 = require('./data-service');
var main_1 = require('./main');
var page_1 = require('./page');
var AppComponent = (function () {
    function AppComponent(DataService) {
        this.loaded = DataService.loaded;
        var passphrase = 'MjlzZWtzZXJl';
        this.checkPassword = function (password) {
            if (btoa(password) == passphrase) {
                console.log(true);
                return true;
            }
        };
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'um-app',
            templateUrl: './app/app.html',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgIf, angular2_1.FORM_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Main', component: main_1.MainComponent },
            { path: '/page:page', as: 'Page', component: page_1.PageComponent }
        ]), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map