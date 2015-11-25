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
var http_1 = require('angular2/http');
var DataService = (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.put = this.put.bind(this);
        this.loaded = { bool: false };
        this.data = {};
        this.url = 'https://ungmedia.firebaseio.com/content/';
        this.http.get(this.url + '.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.loaded.bool = true;
            _this.data = data;
            console.log('Data loaded via http!');
        });
    }
    DataService.prototype.put = function (page, data) {
        this.http.put(this.url + page + '.json', JSON.stringify(data))
            .subscribe(function () { return console.log('Data put successfully!'); });
    };
    DataService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
})();
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map