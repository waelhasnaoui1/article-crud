import { Injectable } from '@angular/core';
import { ArticleDto } from '../models/ArticleDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = `${environment.apiBaseUrl}/api/articles`;

  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>(this.apiUrl);
  }

  getArticleById(id: number): Observable<ArticleDto> {
    return this.http.get<ArticleDto>(`${this.apiUrl}/${id}`);
  }

  createArticle(article: ArticleDto): Observable<ArticleDto> {
    return this.http.post<ArticleDto>(this.apiUrl, article);
  }

  updateArticle(id: number, article: ArticleDto): Observable<ArticleDto> {
    return this.http.put<ArticleDto>(`${this.apiUrl}/${id}`, article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}