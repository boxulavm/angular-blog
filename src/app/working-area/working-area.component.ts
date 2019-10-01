import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-working-area',
  templateUrl: './working-area.component.html',
  styleUrls: ['./working-area.component.css'],

  animations: [
    trigger('fadeIn', [
      state('normal', style({
        opacity: 0
      })),
      state('high', style({
        opacity: 1
      })),
      transition('normal <=> high', animate(500))
    ]),
    trigger('postsIn', [
      state('normal', style({
        opacity: 0
      })),
      state('high', style({
        opacity: 1
      })),
      transition('normal => high', animate(1000))
    ]),
  ]

})
export class WorkingAreaComponent implements OnInit {
  state = 'normal';
  postsState = 'normal';
  
  loadedPosts = [];

  loading = false;

  title: string = 'Welcome to Angular Blog!'

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.onAnimate()
    }, 500);;
  }


  private onAnimate(){
    this.state = 'high';
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
        this.loadedPosts = [...posts.slice(0, 7)];
        setTimeout(() => {
          this.loading = false;
          setTimeout(() => {
            this.postsState = 'high';
          }, 100);
        }, 1000);
      });
  }

}
