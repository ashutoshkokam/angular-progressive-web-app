import { Injectable } from '@angular/core';
import { Post } from './post/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getPosts(){
    return this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
