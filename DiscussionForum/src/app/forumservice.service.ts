import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumserviceService {

  baseUrl="http://localhost:8084/forum";
  constructor(private http:HttpClient) { }


  createUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}/createUser`,user)
  };
  
  loginUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}/loginUser`,user)
  };
  
  createPost(post:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}/save`,post)
    }

    getOnePost():any

  {
    return this.http.get(`${this.baseUrl}/get/{postId}`);
  }

  getAllPost():any{

    return this.http.get(`${this.baseUrl}/getAllPost`);
  }

  addPost(post:Object){
    return this.http.post(`${this.baseUrl}/savePost`,post);
  }
}

// createPlayer(player:Object):Observable<Object>{

//   return this.http.post(`${this.baseUrl}/save`,player);
// }