import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post;
  postContent;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.data.post;
    this.postContent = this.post.content.rendered;
    console.log(this.postContent);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
