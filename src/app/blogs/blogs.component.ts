import { Component, OnInit } from '@angular/core';
import { BlogServices } from './blogServices';
import { blogTable } from './blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers:[]
})
export class BlogsComponent implements OnInit {
blogs:blogTable[];

  constructor(private readonly blogservice:BlogServices) { }

  ngOnInit() {
    this.blogservice.getBlogs()
    .subscribe(
      (data:any[])=>this.blogs=data

    );
  }

}
