declare var Firebase: any;

import { Injectable, EventEmitter } from 'angular2/angular2';

@Injectable()
export class DataService {
	public data: any;
	private backup: any;
	public loaded: any;

	private ref: any;
	private backupRef: any;

	constructor() {
		const url = 'https://ungmedia.firebaseio.com/content/';
		const backupUrl = 'https://ungmedia.firebaseio.com/backup/';

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

		let contentStream = new EventEmitter();
		contentStream
			.subscribe(res => {
				console.log(res.type + ' loaded!');
				this.loaded.bool = true;
				this[res.type] = res.content;
			});
		
		this.ref.on('value', snapshot => contentStream.next({ content: snapshot.val(), type: 'data'}));
		this.backupRef.on('value', snapshot => contentStream.next({ content: snapshot.val(), type: 'backup'}));
	}

	put(page: string, data: string) {
		this.ref.child(page).set(data, () => alert('Nytt innhold lagret!'));
	}

	reset() {
		this.ref.set(this.backup, () => alert('Innhold tilbakestilt til forrige backup!'));
	}
}