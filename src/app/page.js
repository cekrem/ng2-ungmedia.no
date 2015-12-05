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
var data_service_1 = require('./data-service');
var PageComponent = (function () {
    function PageComponent(params, DataService) {
        var _this = this;
        this.page = params.get('page');
        DataService.contentStream
            .subscribe(function (res) {
            if (res.type == 'data')
                _this.content = res.content;
        });
        this.put = function (page, data) { return DataService.put(page, data); };
        this.reset = function () { return DataService.reset(); };
    }
    PageComponent = __decorate([
        angular2_1.Component({
            selector: 'Content',
            templateUrl: './app/page.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, data_service_1.DataService])
    ], PageComponent);
    return PageComponent;
})();
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.js.map