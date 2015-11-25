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
    
    constructor(params: RouteParams, DataService: DataService) {
        this.page = params.get('page');
        
        this.content = DataService.data;
    }
}
