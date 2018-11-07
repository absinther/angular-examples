import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  title: string;
  votes: number;
  link: string;

  constructor() {
    this.title = 'Title one';
    this.votes = 3;
    this.link = '127.0.0.1';
  }

  ngOnInit() {
  }

  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }

}
