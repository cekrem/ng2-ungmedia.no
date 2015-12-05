import { Component, View, Input } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { DataService } from './data-service';

@Component({
    selector: 'Content',
    templateUrl: './app/page.html',
    providers: [DataService]
})

export class PageComponent {
    public page: string;
    public content: Content;
    public put: Function;
    public reset: Function;
    
    constructor(params: RouteParams, DataService: DataService) {
        this.page = params.get('page');

        DataService.contentStream
            // .filter(data => data.type == 'data')
            .subscribe(res => {
                if (res.type == 'data')
                this.content = res.content;
            });

        this.put = (page: string, data: string) => DataService.put(page, data);
        this.reset = () => DataService.reset();
    }
}

interface Content {
    hvem: string;
    hva: string;
    hvor: string;
    hvordan: string;
}