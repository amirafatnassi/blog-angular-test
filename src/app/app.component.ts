import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/welcome']"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/list-post']"
          >
            Post List</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/add-post']"
            >Add Post</a
          >
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle = 'blog-angular-test';
}
