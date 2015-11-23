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
var DataService = (function () {
    function DataService() {
        var _this = this;
        this.data = {};
        this.loaded = { bool: false };
        var firebaseUrl = 'https://ungmedia.firebaseio.com/content/';
        var ref = new Firebase(firebaseUrl);
        ref.on('value', function (snapshot) { _this.data = snapshot.val(); _this.loaded.bool = true; }, function (error) { return console.error(error); });
    }
    DataService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
})();
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map