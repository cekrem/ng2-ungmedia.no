import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';

@Injectable()
export class DataService {
        public data: any;
        public loaded: any;

        private http: Http;
        private url: string;
        private backupUrl: string;
        private backup: any;

        constructor(http: Http) {
                this.http = http;
                this.put = this.put.bind(this);
                this.reset = this.reset.bind(this);

                this.loaded = { bool: false };
                this.data = {};
                this.url = 'https://ungmedia.firebaseio.com/content/';
                this.backupUrl = 'https://ungmedia.firebaseio.com/backup/';

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
                        .subscribe(() => alert('Nytt innhold lagret!'));
        }
        
        reset() {
                this.http.get(this.backupUrl + '.json')
                        .map(res => res.json())
                        .subscribe(data => {
                                console.log('Backup loaded successfully');
                                this.backup = data;
                                
                                this.http.put(this.url + '.json', JSON.stringify(this.backup))
                                        .subscribe(() => alert('Innhold tilbakestilt til forrige backup!'));
                        })
        }
}