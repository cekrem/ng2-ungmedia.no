var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var main_1 = require('./main');
var page_1 = require('./page');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.checkPassword = function (password) {
        var passphrase = 'MjlzZWtzZXJl';
        if (btoa(password) == passphrase) {
            console.log(true);
            return true;
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'um-app',
            templateUrl: './app/app.html',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgIf]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Main', component: main_1.MainComponent },
            { path: '/page:page', as: 'Page', component: page_1.PageComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map