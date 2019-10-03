import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  fullPostId;
  loadedPost;
  loading = false;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
        this.loading = true;

        // Get Id from router
        this.route.paramMap.subscribe(params => {
          this.fullPostId = [+params.get('postId')];
        });

        // Send request to server with Id
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.fullPostId}`)
        .then(response => response.json())
        .then(post => {
          this.loadedPost = post;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });

  }

}
