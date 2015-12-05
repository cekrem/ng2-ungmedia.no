declare var Firebase: any;

import { Injectable, EventEmitter } from 'angular2/angular2';

@Injectable()
export class DataService {
	private backup: any;

	private ref: any;
	private backupRef: any;
	
	public contentStream: EventEmitter<any>;

	constructor() {
		console.log('DataService init!');
		
		const url = 'https://ungmedia.firebaseio.com/content/';
		const backupUrl = 'https://ungmedia.firebaseio.com/backup/';
		
		this.ref = new Firebase(url);
		this.backupRef = new Firebase(backupUrl);
		
		this.contentStream = new EventEmitter();

		this.contentStream
			// .filter(res => res.type == 'backup')
			.subscribe(res => {
				if(res.type == 'backup')
				this.backup = res.content;
			});
		
		this.ref.on('value', snapshot => this.contentStream.emit({ content: snapshot.val(), type: 'data'}));
		this.backupRef.on('value', snapshot => this.contentStream.emit({ content: snapshot.val(), type: 'backup'}));
	}

	put(page: string, data: string) {
		this.ref.child(page).set(data, () => alert('Nytt innhold lagret!'));
	}

	reset() {
		this.ref.set(this.backup, () => alert('Innhold tilbakestilt til forrige backup!'));
	}
}