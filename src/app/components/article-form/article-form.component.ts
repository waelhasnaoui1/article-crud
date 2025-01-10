import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from 'src/app/models/ArticleDto';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})

export class ArticleFormComponent implements OnInit {
  article: ArticleDto = { id: 0, nom: '', dateLivraison: '', prix: 0 };

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(+id).subscribe((data) => {
        this.article = data;
      });
    }
  }

  saveArticle() {
    if (this.article.id === 0) {
      this.articleService.createArticle(this.article).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    } else {
      this.articleService.updateArticle(this.article.id, this.article).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }
}