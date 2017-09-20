import { SavedArticlesComponent } from './saved-articles/saved-articles.component';
import { AllSourcesComponent } from './all-sources/all-sources.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CategorySourcesComponent } from './category-sources/category-sources.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: AllSourcesComponent },
  { path: 'saved-articles',  component: SavedArticlesComponent },
  { path: 'sources/:id', component: ArticlesListComponent },
  { path: 'sources',     component: CategorySourcesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
