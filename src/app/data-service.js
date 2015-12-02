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
var http_1 = require('angular2/http');
var DataService = (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.loaded = { bool: false };
        this.data = {};
        this.url = 'https://ungmedia.firebaseio.com/content/';
        this.backupUrl = 'https://ungmedia.firebaseio.com/backup/';
        /*                this.http.get(this.url + '.json')
                                .map((res: Response) => res.json())
                                .subscribe(data => {
                                        this.loaded.bool = true;
                                        this.data = data;
                                        console.log('Data loaded via http!', new Date());
                                });*/
        var ref = new Firebase(this.url);
        var contentStream = angular2_1.Observable.create(function (observer) {
            ref.on('value', function (snapshot) { return observer.next(snapshot.val()); });
        });
        contentStream
            .subscribe(function (data) {
            _this.loaded.bool = true;
            _this.data = data;
        });
    }
    DataService.prototype.put = function (page, data) {
        this.http.put(this.url + page + '.json', JSON.stringify(data))
            .subscribe(function () { return alert('Nytt innhold lagret!'); });
    };
    DataService.prototype.reset = function () {
        var _this = this;
        this.http.get(this.backupUrl + '.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Backup loaded successfully');
            _this.backup = data;
            _this.http.put(_this.url + '.json', JSON.stringify(_this.backup))
                .subscribe(function () { return alert('Innhold tilbakestilt til forrige backup!'); });
        });
    };
    DataService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
})();
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map