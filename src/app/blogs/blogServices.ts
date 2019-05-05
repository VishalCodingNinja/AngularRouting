
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
  })
export class BlogServices 
  {  
    constructor(private httpClient:HttpClient){
        
    }
    getBlogs(){
       return  this.httpClient.get('http://127.0.0.1:3000/getPosts')
            .pipe(map(res=>res))
    }
  
    
}