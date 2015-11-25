import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';

@Injectable()
export class DataService {
        public data: any;
        public loaded: any;

        constructor(http: Http) {
                this.loaded = { bool: false };
                this.data = {};
                var url: string = 'https://ungmedia.firebaseio.com/content/';

                http.get(url +'.json')
                .map(res => res.json())
                .subscribe(data => {
                        this.loaded.bool = true;
                        this.data = data;
                        console.log('Data loaded via http!');
                });
        }
}