import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';

@Injectable()
export class DataService {
        public data: any;
        public loaded: any;

        private http: Http;
        private url: string;

        constructor(http: Http) {
                this.http = http;
                this.put = this.put.bind(this);

                this.loaded = { bool: false };
                this.data = {};
                this.url = 'https://ungmedia.firebaseio.com/content/';

                this.http.get(this.url + '.json')
                        .map(res => res.json())
                        .subscribe(data => {
                                this.loaded.bool = true;
                                this.data = data;
                                console.log('Data loaded via http!');
                        });
        }

        put(page: string, data: string) {
                this.http.put(this.url + page + '.json', JSON.stringify(data))
                        .subscribe(() => console.log('Data put successfully!'));
        }
}