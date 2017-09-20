import { AppService } from './../app.service';
import { Sources } from './../sources';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-sources',
  templateUrl: './all-sources.component.html',
  styleUrls: ['./all-sources.component.css']
})
export class AllSourcesComponent implements OnInit {


  sources: Sources[];
  private errorMessage: any = '';
  constructor(private service: AppService) { }

  getAllSources() {
        this.service.getSources()
            .then(
                    sources => this.sources = sources,
                    error => this.errorMessage = <any>error  );
      }

  ngOnInit() {
    this.getAllSources();
  }

}
