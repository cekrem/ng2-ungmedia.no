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
        var url = 'https://ungmedia.firebaseio.com/content/';
        var backupUrl = 'https://ungmedia.firebaseio.com/backup/';
        this.loaded = { bool: false };
        this.data = {};
        this.ref = new Firebase(url);
        this.backupRef = new Firebase(backupUrl);
        /*                this.http.get(this.url + '.json')
                                .map((res: Response) => res.json())
                                .subscribe(data => {
                                        this.loaded.bool = true;
                                        this.data = data;
                                        console.log('Data loaded via http!', new Date());
                                });*/
        var contentStream = new angular2_1.EventEmitter();
        contentStream
            .subscribe(function (res) {
            console.log(res.type + ' loaded!');
            _this.loaded.bool = true;
            _this[res.type] = res.content;
        });
        this.ref.on('value', function (snapshot) { return contentStream.next({ content: snapshot.val(), type: 'data' }); });
        this.backupRef.on('value', function (snapshot) { return contentStream.next({ content: snapshot.val(), type: 'backup' }); });
    }
    DataService.prototype.put = function (page, data) {
        this.ref.child(page).set(data, function () { return alert('Nytt innhold lagret!'); });
    };
    DataService.prototype.reset = function () {
        this.ref.set(this.backup, function () { return alert('Innhold tilbakestilt til forrige backup!'); });
    };
    DataService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
})();
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map