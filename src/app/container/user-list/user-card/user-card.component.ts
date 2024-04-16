import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input()
  user:{
    login: string,
    avatar_url: string;
    repos_url: string;
    type: string;
    name: string,
    company: string,
    location: string,
    bio: string
  };

}
