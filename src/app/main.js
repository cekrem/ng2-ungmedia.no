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
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        angular2_1.Component({
            selector: 'Main',
            templateUrl: './app/main.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['./index.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
})();
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.js.map