import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post = this.readPost()

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  get isLoggedIn() {
    return !!localStorage.getItem("user")
  }

  readPost(): any {
    const id = this.route.snapshot.paramMap.get("id")

    return this.postService.readPost(id!).subscribe(data => this.post = data)
  }
}
