import { Injectable } from 'angular2/angular2';

@Injectable()
export class DataService {
        public data: any = {};
        public loaded: any;

        constructor() {
                this.loaded = { bool: false };

                var firebaseUrl: string = 'https://ungmedia.firebaseio.com/content/';
                var ref = new Firebase(firebaseUrl);

                ref.on('value',
                        (snapshot) => { 
                                this.data = snapshot.val(); this.loaded.bool = true; console.log('Data loaded!');
                        },
                        (error) => console.error(error)
                );
        }
}