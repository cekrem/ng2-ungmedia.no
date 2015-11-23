import { Component, View, Input } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { DataService } from './data-service';

@Component({
    selector: 'Content',
    templateUrl: './app/content.html'
})

export class ContentComponent {
    public content:string;
    public remoteHtml:any = 'placeholder';
    
    constructor(params: RouteParams, DataService: DataService) {
        this.content = params.get('content');
        
        this.remoteHtml = DataService.data[this.content];
    }
}
