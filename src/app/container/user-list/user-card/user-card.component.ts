import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Output() 
  joinClicked = new EventEmitter<string>();

  @Input()
  team: {
    team_name: string,
      team_logo: string,
      captain: string,
      owner: string,
      winning_years: number[],
      home_stadium: string,
      coach: string,
      team_colors: string[],
      founding_year: number,
      website_url: string
  }
  
  onJoinButtonClick(){
    this.joinClicked.emit(this.team.team_logo)
  }
}