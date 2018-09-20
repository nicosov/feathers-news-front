import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  users$: Observable<any>;
  post$: Observable<any>;

  user$: Observable<any>;

  users = [];
  posts = [];
  user = {};

  constructor(private auth: AuthService, private data: DataService) {
    this.users$ = data.users$();
    this.post$ = data.posts$();
    this.user$ = data.user$();
  }

  ngOnInit(): void {
    this.users$.pipe(
      map((user) => this.users = [...user.data])
    ).subscribe();

    this.post$.pipe(
      map((post) => this.posts = [...post.data])
    ).subscribe();
  }

  sendMessage(post: string) {
    this.data.sendPost(post);
  }

  onLogout() {
    this.auth.logout();
  }

}
