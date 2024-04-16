import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = [
    {
      "login": "Raghav485",
      "avatar_url": "https://t4.ftcdn.net/jpg/06/36/46/45/240_F_636464567_rTteiuRZHlq92RvbV25PmqAWwqHxb1Yb.jpg",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "Raghav Jain",
      "company": "Morgan Stanley",
      "location": "India",
      "bio": "Software Engineer Morgan Stanley"
    },
    {
      "login": "Sneha874",
      "avatar_url": "https://t3.ftcdn.net/jpg/05/87/35/38/240_F_587353889_8I4Ed50y3aJoMRIzPxciUUTBjYi2IjZV.jpg",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "Sneha Gaurav",
      "company": "Microsoft",
      "location": "India",
      "bio": "Software Engineer at Microsoft || B.Tech in Computer Science"
    },
    {
      "login": "Himanshu631",
      "avatar_url": "https://avatars.githubusercontent.com/u/55944613?v=4",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "Admin",
      "name": "Himanshu Paul",
      "company": "Google",
      "location": "India",
      "bio": "Software Engineer || B.Tech in Computer Science"
    },
    {
      "login": "Genie23",
      "avatar_url": "https://t4.ftcdn.net/jpg/06/30/72/63/240_F_630726395_e4SnTyL9idLitfpb8jSDTCYej6pWZf3U.jpg",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "Genie Singh",
      "company": "Cavisson",
      "location": "USA",
      "bio": "Software Engineer || NodeJs Developer"
    },
    {
      "login": "Surbhi90",
      "avatar_url": "https://img.freepik.com/premium-photo/corporate-businesswoman-stands-smiling-outside-her-office-building_323624-1797.jpg?size=626&ext=jpg&ga=GA1.1.59398754.1713080738&semt=ais",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "Surbhi Kumari",
      "company": "Lowes India",
      "location": "India",
      "bio": "Software Engineer || NodeJs Developer"
    },
    {
      "login": "Prabhas_Kumar",
      "avatar_url": "https://img.freepik.com/premium-photo/smiling-businessman-using-digital-tablet-office-premises_107420-96811.jpg?size=626&ext=jpg&ga=GA1.1.59398754.1713080738&semt=ais",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "Prabhas Kumar",
      "company": "AFCONS",
      "location": "USA",
      "bio": "Structural Engineer"
    },
    {
      "login": "JohnEng",
      "avatar_url": "https://img.freepik.com/premium-photo/generative-ai-indian_117141-400.jpg?size=626&ext=jpg",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "John Twain",
      "company": "Myntra",
      "location": "India",
      "bio": "Software Engineer || Full Stack Developer"
    },
    {
      "login": "Roshan",
      "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPP2z-PBAXCx98vwE607wHRpA7w11cTHIOQ&s",
      "repos_url": "https://api.github.com/users/Himanshu631/repos",
      "type": "User",
      "name": "Roshan Kumar",
      "company": "TATA Communications",
      "location": "India",
      "bio": "Network Engineer "
    }
  ];

  filteredUsers = [];

  constructor(private searchService: SearchService){}

  ngOnInit(){
    this.searchService.search$.subscribe(searchValue => {
      this.filteredUsers = this.filterUsers(searchValue);
    });
  }

  totalEngineers = this.users.length;
  indianEngineers = this.users.filter(p => p.location==="India").length;
  usaEngineers = this.totalEngineers - this.indianEngineers;

  selectedFilterRadio: string = 'All';

  onChangedSelectedFilter(value: string){
    this.selectedFilterRadio = value;
  }

  filterUsers(searchValue: string){
    if (searchValue.trim() === '') {
      return this.users;
    }
    return this.users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
