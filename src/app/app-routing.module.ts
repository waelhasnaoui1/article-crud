import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'edit/:id', component: ArticleFormComponent },
  { path: 'add', component: ArticleFormComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
