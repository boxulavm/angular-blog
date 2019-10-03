import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  UserId;
  User;
  loading = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loading = true;

    // Get Id from router
    this.route.paramMap.subscribe(params => {
      this.UserId = [+params.get('userId')];
    });

        // Send request to server with Id
        fetch(`https://jsonplaceholder.typicode.com/users/${this.UserId}`)
        .then(response => response.json())
        .then(post => {
          this.User = post;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
  }

}
