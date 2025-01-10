import { Component, OnInit } from '@angular/core';
import { ArticleDto } from 'src/app/models/ArticleDto';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: ArticleDto[] = [];
  displayedColumns: string[] = ['id', 'nom', 'prix', 'dateLivraison', 'actions'];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.getAllArticles().subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error('Error loading articles', error);
      }
    );
  }

  deleteArticle(id: number) {
    if (confirm('Are you sure you want to delete this article?')) {
      this.articleService.deleteArticle(id).subscribe(
        () => {
          this.articles = this.articles.filter((article) => article.id !== id);
        },
        (error) => {
          console.error('Error deleting article', error);
        }
      );
    }
  }
}