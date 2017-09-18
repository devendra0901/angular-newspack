import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AllSourcesComponent } from './all-sources/all-sources.component';
import { CategorySourcesComponent } from './category-sources/category-sources.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SavedButtonsComponent } from './saved-buttons/saved-buttons.component';
import { SavedArticlesComponent } from './saved-articles/saved-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    AllSourcesComponent,
    CategorySourcesComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    ButtonsComponent,
    SavedButtonsComponent,
    SavedArticlesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
