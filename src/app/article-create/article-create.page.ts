import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model'; 


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.page.html',
  styleUrls: ['./article-create.page.scss'],
})
export class ArticleCreatePage implements OnInit {

  article:Article = new Article();
  errors: any = {};
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {}

  response(response): void{
    
    if(response.success===false){
      
      if( response.errors.name == 'MissingArticletitleError' ){
        this.errors.title = 'Please enter a title';
      }

      if( response.errors.name == 'ArticleExistsError' ){
        this.errors.description = 'An article with the given description is already article-createed';
      }

      if( response.errors.name == 'MissingBodyError' ){
        this.errors.keywords = 'Please enter keywords';
      }

      // if( response.errors.body ){
      //   this.errors.body = response.errors.errors.body.message;
      // }

    }

    if(response.success===true){
      this.router.navigate(['/articles']);
    }
  }

  onSubmit(): void{
    this.articlesService.createArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

}