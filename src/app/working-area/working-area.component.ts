import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-working-area',
  templateUrl: './working-area.component.html',
  styleUrls: ['./working-area.component.css']
})
export class WorkingAreaComponent implements OnInit {

  loadedPosts = [];

  loading = false;

  title: string = 'Welcome to Angular Blog!'

  constructor() { }

  ngOnInit() {
  }

  // Click Event
  onClick() {
    this.fetchPosts();
  }

  // Sends GET Request To Server

  private fetchPosts() {
    this.loading = true;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.loadedPosts = [...posts.slice(0, 7)]
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}
