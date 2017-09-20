import { Article } from './../article';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent  {

  @Input() article: Article;

}
