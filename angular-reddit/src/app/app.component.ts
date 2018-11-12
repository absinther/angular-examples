import {Component} from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`These are the new values: ${title.value}, ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  constructor() {
    this.articles = [
      new Article('Un', 'http://localhost', 5),
      new Article('Deux', 'http://127.0.0.1', 3),
      new Article('Trois', 'http://196.180.0.1', 1)
    ];
  }

}
