import { Component, View, Input } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { DataService } from './data-service';

@Component({
    selector: 'Content',
    templateUrl: './app/page.html'
})

export class PageComponent {
    public page: string;
    public content;
    public put: Function;
    public reset: Function;
    
    constructor(params: RouteParams, DataService: DataService) {
        this.page = params.get('page');
        
        this.content = DataService.data;
        this.put = (page: string, data: string) => DataService.put(page, data);
        this.reset = () => DataService.reset();
    }
}
