import { AppService } from './../app.service';
import { Article } from './../article';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;
  private errorMessage:any = '';

  constructor(
    private service: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  // getInput(s:string){

  //   this.service.getData(s)
  //       .then(
  //               articles => this.articles = articles,
  //               error => this.errorMessage = <any>error  );
  // }

  getUrl(article: Article){
    return article.url;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.service.getData(params['id']))
      .subscribe(articles => this.articles = articles);
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }
}
