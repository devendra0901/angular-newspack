import { Sources } from './sources';
import { Article } from './article';
import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title = 'News Aggregator';
  // search:string='';
  // articles: Article[];
  // sources: Sources[];
  // private errorMessage:any = '';
  // constructor(private service: AppService) {}
  
}
