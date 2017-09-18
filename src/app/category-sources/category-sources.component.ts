import { AppService } from './../app.service';
import { Sources } from './../sources';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-sources',
  templateUrl: './category-sources.component.html',
  styleUrls: ['./category-sources.component.css']
})


export class CategorySourcesComponent {

  sources: Sources[];
  private errorMessage:any = '';
  constructor(private service: AppService) { }


  getSources(s: string) {
    this.service.getSourcesByCategory(s)
        .then(
                sources => this.sources = sources,
                error => this.errorMessage = <any>error  );
  }

 
}
