import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PostsProvider } from '../../providers/posts/posts';
import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;
  alberto: "Alberto";
  constructor(public navCtrl: NavController, public postProvider: PostsProvider) {
    this.getPosts();
   }


  getPosts() {
    this.postProvider.getPosts()
      .then(data => {
        this.posts = data;
        console.log(this.posts);
      })
  }

  goPost(post) {
    return this.navCtrl.push(PostPage, {post: post});
  }
}
